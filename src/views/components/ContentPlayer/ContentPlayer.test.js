import React from 'react';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';
import ReactPlayer from 'react-player';
import PlayerControls from '../PlayerControls';

import CONTENT from '../../../data/content-objects';
import ContentPlayer, {
  getContent,
  ContentNotFound,
  ViewableContent as ContentToView,
} from './ContentPlayer';
import PageHeader from '../PageHeader';
import YFFRLogo from '../YFFRLogo';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());
const chance = new Chance();
const givenCorrectType = () => chance.pickone(['video']);
const givenCorrectCategory = () => chance.pickone(['energy', 'deescalation', 'oh-shit']);
const givenCorrectId = () => chance.natural({ min: 0, max: 2 });
const givenIncorrectValue = () => chance.pickone([undefined, 'foo', 34, {}]);

const givenContentObject = () => ({
  title: chance.string(),
  url: chance.url(),
  thumbnail: chance.url()
});
const mockContent = {
  audio: {},
  video: {
    energy: [
      givenContentObject(),
      givenContentObject(),
      givenContentObject()
    ],
    deescalation: [
      givenContentObject(),
      givenContentObject(),
      givenContentObject()
    ],
    'oh-shit': [
      givenContentObject(),
      givenContentObject(),
      givenContentObject()
    ]
  }
};

describe('Content Player component testing', () => {
  const defaultProps = {
    type: chance.string(),
    url: chance.string(),
    title: chance.string()
  };

  it('should initialize state correctly', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };
    const expectedState = {
      isPlaying: false
    };

    const contentToView = new ContentToView(props);

    expect(contentToView.state).to.deep.equal(expectedState);
  });

  it('should create a ref for the content player', () => {
    const contentToView = new ContentToView(defaultProps);

    expect(contentToView.contentPlayer).to.not.equal(undefined);
    expect(contentToView.contentPlayer)
      .to.be.an('object').with.own.property('current').equals(null);
  });

  it('should set the ref for the content player when the component is rendered', () => {
    const contentToView = mount(<ContentToView {...defaultProps} />);
    const element = contentToView.instance();
    const currentPlayer = element.contentPlayer.current;

    expect(currentPlayer).to.not.equal(null);
    expect(currentPlayer).to.be.an.instanceof(ReactPlayer);
  });

  it('should create a ref for the player controls if the type is audio', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };

    const contentToView = new ContentToView(props);

    expect(contentToView.playerControls).to.not.equal(undefined);
    expect(contentToView.playerControls)
      .to.be.an('object').with.own.property('current').equals(null);
  });

  it('should set the ref for the player controls when the component is rendered', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };
    const contentToView = mount(<ContentToView {...props} />);
    const element = contentToView.instance();
    const playerControls = element.playerControls.current;

    expect(playerControls).to.not.equal(null);
    expect(playerControls).to.be.an.instanceof(PlayerControls);
  });

  it('should delegate progress events to the player controls', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };
    const contentToView = mount(<ContentToView {...props} />);
    const element = contentToView.instance();
    const playerControls = element.playerControls.current;
    const controlsProgressHandlerStub = sinon.stub(playerControls, 'onProgress');

    const callArgs = [
      chance.d100(),
      chance.string(),
      [chance.d6(), chance.d6(), chance.d6(), chance.d6()],
      undefined,
      { loaded: chance.floating(), played: chance.floating() }
    ];
    element.onProgress(callArgs[0]);
    element.onProgress(callArgs[1]);
    element.onProgress(callArgs[2]);
    element.onProgress(callArgs[3]);
    element.onProgress(callArgs[4]);

    expect(
      controlsProgressHandlerStub.callCount,
      'should invoke the progress handler on the controls'
    ).to.equal(callArgs.length);
    callArgs.forEach((arg, idx) => {
      expect(
        controlsProgressHandlerStub.getCall(idx).calledWith(arg),
        'should forward the arguments passed from the react player'
      ).to.equal(true)
    });
  });

  it('should handle skipping to the previous file', () => {

  });

  it('should handle pausing the content player', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };
    const expectedState = {
      isPlaying: false,
    };

    const contentToView = new ContentToView(props);
    let state = contentToView.state;
    const setState = sinon.stub(contentToView, 'setState').callsFake(newState => {
      state = {
        ...state,
        ...newState
      };
    });

    contentToView.onPause();

    expect(setState.callCount).to.equal(1);
    expect(state).to.deep.equal(expectedState);
  });

  it('should handle resuming the content player', () => {
    const props = {
      ...defaultProps,
      type: 'audio'
    };
    const expectedState = {
      isPlaying: true,
    };

    const contentToView = new ContentToView(props);
    let state = contentToView.state;
    const setState = sinon.stub(contentToView, 'setState').callsFake(newState => {
      state = {
        ...state,
        ...newState
      };
    });

    contentToView.onPause();
    contentToView.onResume();

    expect(setState.callCount).to.equal(2);
    expect(state).to.deep.equal(expectedState);
  });

  it('should render the page header and logo', () => {
    const wrapper = shallow(<ContentPlayer />);

    const mainDiv = wrapper.find('div.content-player');
    expect(
      mainDiv,
      'must have the container div with content-player class'
    ).to.have.length(1);

    expect(
      mainDiv.find(PageHeader),
      'must render the page header',
    ).to.have.length(1);

    expect(
      mainDiv.find(YFFRLogo),
      'must render the YFFR Logo',
    ).to.have.length(1);

    expect(
      mainDiv.find(ContentNotFound),
      'no valid content, so must show content not found'
    ).to.have.length(1);
  });

  describe('content fetching', () => {
    it('should get a content item when all arguments are correct', () => {
      const type = givenCorrectType();
      const category = givenCorrectCategory();
      const id = givenCorrectId();

      const contentItem = getContent(mockContent)(type, category, id);

      expect(contentItem).to.not.equal(undefined);
      expect(contentItem).to.be.an('object');
      expect(
        Object.keys(contentItem)
      ).to.have.deep.members(['id', 'type', 'category', 'title', 'url', 'thumbnail']);
    });

    it('should not get a content item when incorrect type is passed', () => {
      const type = givenIncorrectValue();
      const category = givenCorrectCategory();
      const id = givenCorrectId();

      const contentItem = getContent(mockContent)(type, category, id);
      expect(contentItem).to.equal(undefined);
    });

    it('should not get a content item when incorrect category is passed', () => {
      const type = givenCorrectType();
      const category = givenIncorrectValue();
      const id = givenCorrectId();

      const contentItem = getContent(mockContent)(type, category, id);
      expect(contentItem).to.equal(undefined);
    });

    it('should not get a content item when incorrect id is passed', () => {
      const type = givenCorrectType();
      const category = givenCorrectCategory();
      const id = givenIncorrectValue();

      const contentItem = getContent(mockContent)(type, category, id);
      expect(contentItem).to.equal(undefined);
    });
  });

  describe('video content rendering', () => {
    it('should render correctly when the category is energy', () => {
      const props = {
        type: givenCorrectType(),
        category: 'energy',
        id: givenCorrectId()
      };

      const wrapper = shallow(<ContentPlayer {...props} />);
      const contentToView = wrapper.find(ContentToView);
      const expectedContentProps = {
        type: props.type,
        ...getContent(CONTENT)(props.type, props.category, props.id)
      };

      expect(contentToView).to.have.length(1);
      expect(contentToView.props()).to.deep.equal(expectedContentProps);
    });

    it('should render correctly when the category is deescalation', () => {
      const props = {
        type: givenCorrectType(),
        category: 'deescalation',
        id: givenCorrectId()
      };

      const wrapper = shallow(<ContentPlayer {...props} />);
      const contentToView = wrapper.find(ContentToView);
      const expectedContentProps = {
        type: props.type,
        ...getContent(CONTENT)(props.type, props.category, props.id)
      };

      expect(contentToView).to.have.length(1);
      expect(contentToView.props()).to.deep.equal(expectedContentProps);
    });

    it('should render correctly when the category is oh-shit', () => {
      const props = {
        type: givenCorrectType(),
        category: 'oh-shit',
        id: givenCorrectId()
      };

      const wrapper = shallow(<ContentPlayer {...props} />);
      const contentToView = wrapper.find(ContentToView);
      const expectedContentProps = {
        type: props.type,
        ...getContent(CONTENT)(props.type, props.category, props.id)
      };

      expect(contentToView).to.have.length(1);
      expect(contentToView.props()).to.deep.equal(expectedContentProps);
    });

    describe('ContentToView component testing', () => {
      it('renders correctly when the content is a video', () => {
        const contentItem = {
          type: 'video',
          title: 'Yoga For First Responders',
          url: 'https://www.youtube.com/watch?v=iKfb3ZHHKzc',
          thumbnail: 'https://img.youtube.com/vi/iKfb3ZHHKzc/0.jpg'
        };

        const wrapper = shallow(<ContentToView {...contentItem} />);
        const mainDiv = wrapper.find('div.content-to-view');
        const reactPlayer = mainDiv.find(ReactPlayer);
        const playerControls = mainDiv.find(PlayerControls);

        const expectedPlayerProps = {
          onProgress: wrapper.instance().onProgress,
          controls: true,
          id: 'you-tube-player',
          playing: wrapper.state().isPlaying,
          progressInterval: 500,
          style: { display: 'block' },
          url: contentItem.url
        };

        expect(
          mainDiv,
          'must have the main container div with content-to-view class'
        ).to.have.length(1);
        expect(
          reactPlayer,
          'must have the react player'
        ).to.have.length(1);
        expect(playerControls).to.have.length(0);

        expect(
          reactPlayer.props(),
          'must have correct props assigned'
        ).to.deep.include(expectedPlayerProps);
      });

      it('renders correctly when the content is a audio', () => {
        const contentItem = {
          type: 'audio',
          title: 'Yoga For First Responders',
          url: 'https://www.youtube.com/watch?v=iKfb3ZHHKzc',
          thumbnail: 'https://img.youtube.com/vi/iKfb3ZHHKzc/0.jpg'
        };

        const wrapper = shallow(<ContentToView {...contentItem} />);
        const mainDiv = wrapper.find('div.content-to-view');
        const reactPlayer = mainDiv.find(ReactPlayer);
        const playerControls = mainDiv.find(PlayerControls);

        const expectedPlayerProps = {
          controls: true,
          id: 'you-tube-player',
          playing: wrapper.state().isPlaying,
          progressInterval: 500,
          style: { display: 'none' },
          url: contentItem.url
        };

        expect(
          mainDiv,
          'must have the main container div with content-to-view class'
        ).to.have.length(1);
        expect(
          reactPlayer,
          'must have the react player'
        ).to.have.length(1);
        expect(playerControls).to.have.length(1);

        expect(
          reactPlayer.props(),
          'must have correct props assigned'
        ).to.deep.include(expectedPlayerProps);
      });
    });
  });
});