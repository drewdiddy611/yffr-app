import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ContentListFilterBar from './ContentListFilterBar';

import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('Content list filter bar testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContentListFilterBar />);
  });

  it('should render the filter type and the focus area buttons', () => {
    const mainDiv = wrapper.find('div.content-filter-bar');
    const filterTypeButton = mainDiv.childAt(0);
    const focusAreaButton = mainDiv.childAt(1);

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
      size: 'medium'
    };
    expect(filterTypeButton.props()).to.deep.include({
      ...defaultButtonProps,
      'aria-label': 'Filter type menu button'
    });
    expect(focusAreaButton.props()).to.deep.include({
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
});