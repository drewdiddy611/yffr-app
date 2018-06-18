import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

import CropSquareIcon from '@material-ui/icons/CropSquare';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ListIcon from '@material-ui/icons/List';
import YFFRAction from './YFFRAction';
import {
  ACTION_HOME,
  ACTION_CONTENT,
  ACTION_ABOUT
} from '../../App/application-constants';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFRAction component testing', () => {
  let wrapper;

  it('should render a button as a wrapper to receive onClick handler', () => {
    wrapper = shallow(<YFFRAction />);

    const actionButton = wrapper.find('button');
    expect(actionButton).to.have.length(1);
  })

  it('should call the click handler if present', () => {
    const onClickHandler = sinon.stub();
    wrapper = shallow(<YFFRAction onClick={onClickHandler} />);

    wrapper.find('button').simulate('click');

    expect(onClickHandler.callCount).to.equal(1);
  });

  it('should render the home action when type is home', () => {
    wrapper = shallow(<YFFRAction type={ACTION_HOME} />);

    expect(wrapper.find(CropSquareIcon)).to.have.length(1);
  });

  it('should render the content action when type is home', () => {
    wrapper = shallow(<YFFRAction type={ACTION_CONTENT} />);

    expect(wrapper.find(PlayCircleFilledIcon)).to.have.length(1);
  });

  it('should render the about action when type is home', () => {
    wrapper = shallow(<YFFRAction type={ACTION_ABOUT} />);

    expect(wrapper.find(ListIcon)).to.have.length(1);
  });
});