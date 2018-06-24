import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CONTENT from '../../../data/content-objects';
import ContentPlayer, {
  getContent,
  ContentNotFound,
  ContentToView,
} from './ContentPlayer';
import PageHeader from '../PageHeader';
import YFFRLogo from '../YFFRLogo';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

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
      ).to.have.deep.members(['title', 'url', 'thumbnail']);
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

  it.skip('should render the content to view when the content is audio', () => {

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
      const expectedContentProps =
        getContent(CONTENT)(props.type, props.category, props.id);

      expect(contentToView).to.have.length(1);
      expect(contentToView.props()).to.deep.equal(expectedContentProps);
    });

    it('should render correctly when the category is deescalation', () => {
      const props = {
        type: givenCorrectType(),
        category: 'oh-shit',
        id: givenCorrectId()
      };

      const wrapper = shallow(<ContentPlayer {...props} />);
      const contentToView = wrapper.find(ContentToView);
      const expectedContentProps =
        getContent(CONTENT)(props.type, props.category, props.id);

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
      const expectedContentProps =
        getContent(CONTENT)(props.type, props.category, props.id);

      expect(contentToView).to.have.length(1);
      expect(contentToView.props()).to.deep.equal(expectedContentProps);
    });
  });
});