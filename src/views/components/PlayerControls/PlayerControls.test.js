import React from 'react';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import {
  SkipPrevious,
  PlayArrow,
  Pause,
  SkipNext
} from '@material-ui/icons';

import PlayerControls from './PlayerControls';
import { DEFAULT_BUFFER_AMOUNT } from './PlayerControls';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());
const chance = new Chance();

describe('PlayerControls component testing', () => {
  let wrapper;
  beforeEach(() => {
    const expectedProps = {
      isPlaying: false,
      onPause: sinon.stub(),
      onResume: sinon.stub()
    };
    wrapper = shallow(<PlayerControls {...expectedProps} />);
  });

  it('should initialize state correctly', () => {
    const expectedState = {
      completed: 0,
      buffer: DEFAULT_BUFFER_AMOUNT
    };

    const wrapperState = wrapper.state();

    expect(wrapperState).to.deep.equal(expectedState);
  });

  it('should not handle progress updates if no progress', () => {
    const controls = wrapper.instance();
    let state = { ...wrapper.state() };
    const setState =
      sinon.stub(controls, 'setState');

    controls.onProgress(undefined);

    expect(setState.callCount).to.equal(0);
    expect(state).to.deep.equal(wrapper.state());
  });

  it('should handle progress updates', () => {
    const progress = {
      loaded: chance.floating({ min: 0, max: 1 }),
      played: chance.floating({ min: 0, max: 1 })
    };
    const nextProgress = {
      loaded: chance.floating({ min: 0, max: 1 }),
      played: chance.floating({ min: 0, max: 1 }),
    }

    const controls = wrapper.instance();
    let state = wrapper.state();
    const setState =
      sinon.stub(controls, 'setState').callsFake(newState => {
        state = {
          ...state,
          ...newState
        };
      });

    controls.onProgress(progress);
    expect(state).to.deep.include({
      completed: Math.floor(progress.played * 100),
      buffer: Math.floor(progress.loaded * 100)
    });

    controls.onProgress(nextProgress);
    expect(state).to.deep.include({
      completed: Math.floor(nextProgress.played * 100),
      buffer: Math.floor(nextProgress.loaded * 100)
    });
    expect(setState.callCount).to.equal(2);
  });

  it('should handle pausing playback', () => {
    const controls = wrapper.instance();
    const pauseStub = controls.props.onPause;

    controls.pause();

    expect(pauseStub.callCount).to.equal(1);
  });

  it('should handle resuming playback', () => {
    const controls = wrapper.instance();
    const resumeStub = controls.props.onResume;

    controls.resume();

    expect(resumeStub.callCount).to.equal(1);
  });

  describe('markup rendering', () => {
    it('should render the main container div', () => {
      const mainDiv = wrapper.find('div.player-controls');

      expect(mainDiv).to.have.length(1);
    });

    it('should render a progress bar', () => {
      const progressBar = wrapper.find(LinearProgress);
      const wrapperState = wrapper.state();
      const expectedProps = {
        variant: 'buffer',
        value: wrapperState.completed,
        valueBuffer: wrapperState.buffer
      };

      expect(progressBar).to.have.length(1);
      expect(progressBar.props()).to.deep.include(expectedProps);
    });

    it('should render the control buttons', () => {
      const containerDiv = wrapper.find('div.control-actions');
      const actionButtons = containerDiv.find(Button);

      expect(
        containerDiv,
        'should render the action container'
      ).to.have.length(1);
      expect(
        actionButtons,
        'should have 3 actions buttons'
      ).to.have.length(3);

      [SkipPrevious, Pause, SkipNext].forEach((icon, idx) => {
        expect(
          actionButtons.at(idx).find(icon),
          'Should render the correct icon.'
        ).to.have.length(1);
      });
    });

    it('should render the play button if playback is paused', () => {
      wrapper = mount(<PlayerControls />);
      wrapper.setState({
        isPlaying: false
      }, () => {
        const containerDiv = wrapper.find('div.control-actions');
        const actionButtons = containerDiv.find(Button);
        const pauseButton = actionButtons.at(1);

        expect(
          pauseButton.find(PlayArrow),
          'should show the play arrow icon'
        ).to.have.length(1);
      });
    });
  })
});