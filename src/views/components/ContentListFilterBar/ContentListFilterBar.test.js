import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ContentListFilterBar from './ContentListFilterBar';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  FILTER_TYPE_BUTTON_ID,
  FOCUS_AREA_BUTTON_ID
} from './content-list-filter-bar-constants';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme()); ``
describe('Content list filter bar testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContentListFilterBar />);
  });

  it('should render the filter type and the focus area buttons', () => {
    const mainDiv = wrapper.find('div.content-filter-bar');
    const filterTypeButton = mainDiv.childAt(0);
    const focusAreaButton = mainDiv.childAt(2);
    expect(
      mainDiv,
      'must have the main container div'
    ).to.have.length(1);
    expect(
      filterTypeButton,
      'must have the filter type button'
    ).to.have.length(1).and.to.have.type(Button);
    expect(
      focusAreaButton,
      'must have the focus area button'
    ).to.have.length(1).and.to.have.type(Button);

    const defaultButtonProps = {
      variant: 'contained',
      color: 'primary',
      size: 'medium',
      'aria-haspopup': true,
      'aria-owns': null
    };
    expect(filterTypeButton.props()).to.deep.include({
      id: FILTER_TYPE_BUTTON_ID,
      ...defaultButtonProps,
      'aria-label': 'Filter type menu button'
    });
    expect(focusAreaButton.props()).to.deep.include({
      id: FOCUS_AREA_BUTTON_ID,
      ...defaultButtonProps,
      'aria-label': 'Focus area menu button'
    });

    const filterTypeButtonIcon = filterTypeButton.childAt(0);
    const focusAreaButtonIcon = focusAreaButton.childAt(0);

    expect(
      filterTypeButtonIcon,
      'must have the correct filter type icon'
    ).to.have.length(1).and.to.have.type(ExpandMore);
    expect(
      focusAreaButtonIcon,
      'must have the correct focus area icon'
    ).to.have.length(1).and.to.have.type(ExpandMore);
  });

  it('should open the filter type menu when the button is clicked', () => {
    const mainDiv = wrapper.find('div.content-filter-bar');
    const filterTypeButton = mainDiv.childAt(0);
    const filterTypeMenu = mainDiv.childAt(1);

    expect(
      filterTypeButton,
      'must have onClick defined'
    ).to.have.prop('onClick');
    expect(
      filterTypeMenu,
      'must have the menu in the markup'
    ).to.have.length(1).and.to.have.type(Menu);
    expect(
      filterTypeMenu,
      'must not be visible'
    ).to.have.prop('anchorEl').equals(null);

    const eventData = {
      currentTarget: {
        id: filterTypeButton.props().id
      }
    };
    filterTypeButton.simulate('click', eventData);
    expect(wrapper.state().filterTypeEl.id).to.equal(filterTypeButton.props().id);
  });

  it('should open the filter type menu when the button is clicked', () => {
    const mainDiv = wrapper.find('div.content-filter-bar');
    const focusAreaButton = mainDiv.childAt(2);
    const focusAreaMenu = mainDiv.childAt(3);

    expect(
      focusAreaButton,
      'must have onClick defined'
    ).to.have.prop('onClick');
    expect(
      focusAreaMenu,
      'must have the menu in the markup'
    ).to.have.length(1).and.to.have.type(Menu);
    expect(
      focusAreaMenu,
      'must not be visible'
    ).to.have.prop('anchorEl').equals(null);

    const eventData = {
      currentTarget: {
        id: focusAreaButton.props().id
      }
    };
    focusAreaButton.simulate('click', eventData);
    expect(wrapper.state().focusAreaEl.id).to.equal(focusAreaButton.props().id);
  });
});