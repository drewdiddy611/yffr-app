import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

import YFFRFab from './YFFRFab';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OhShitIcon from '@material-ui/icons/PriorityHigh';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../PageHeader/page-header-constants';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFR floating action button component testing', () => {
  let wrapper;

  it('should render a floating action button', () => {
    wrapper = shallow(<YFFRFab />);

    const fabDiv = wrapper.find('div.poa-fab');
    expect(fabDiv).to.have.length(1);

    const fabButton = wrapper.find(Button);
    expect(fabButton).to.have.length(1);
    expect(
      fabButton.first(),
      'should have correct variant prop'
    ).to.have.prop('variant', 'fab');
    expect(
      fabButton.first(),
      'should have correct color prop'
    ).to.have.prop('color', 'primary');
  });

  it('should call the click handler if present', () => {
    const onClickHandler = sinon.stub();
    wrapper = shallow(<YFFRFab onClick={onClickHandler} />);

    wrapper.find(Button).simulate('click');

    expect(onClickHandler.callCount).to.equal(1);
  });

  it('should render an energy and focus button', () => {
    wrapper = shallow(<YFFRFab type={ENERGY_AND_FOCUS} />);

    const energyButton = wrapper.find(Button).first();
    const addIcon = wrapper.find(AddIcon);

    expect(
      energyButton,
      'should have correct className prop'
    ).to.have.prop('className', 'btn-default');
    expect(
      energyButton,
      'should have correct ariaLabel prop'
    ).to.have.prop('aria-label', 'Energy and Focus');

    expect(addIcon, 'should render the add icon').to.have.length(1);
  });

  it('should render a deescalation button', () => {
    wrapper = shallow(<YFFRFab type={DEESCALATION} />);

    const deescalationButton = wrapper.find(Button).first();
    const removeIcon = wrapper.find(RemoveIcon);

    expect(
      deescalationButton,
      'should have correct className prop'
    ).to.have.prop('className', 'btn-default');
    expect(
      deescalationButton,
      'should have correct ariaLabel prop'
    ).to.have.prop('aria-label', 'Deescalation');

    expect(removeIcon, 'should render the remove icon').to.have.length(1);
  });

  it('should render a oh shit button', () => {
    wrapper = shallow(<YFFRFab type={OH_SHIT} />);

    const ohShitButton = wrapper.find(Button).first();
    const ohShitIcon = wrapper.find(OhShitIcon);

    expect(
      ohShitButton,
      'should have correct className prop'
    ).to.have.prop('className', 'btn-oh-shit');
    expect(
      ohShitButton,
      'should have correct ariaLabel prop'
    ).to.have.prop('aria-label', 'Oh Shit!');

    expect(ohShitIcon, 'should render the oh shit icon').to.have.length(1);
  })

});
