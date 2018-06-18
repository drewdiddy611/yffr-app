import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import MainScreen from './MainScreen';
import YFFRLogo from '../../components/YFFRLogo';
import PageHeader from '../../components/PageHeader';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../../components/PageHeader/page-header-constants';
import { MAIN_SCREEN_PAGE_HEADER_TEXT } from '../../App/application-constants';
import YFFRFab from '../../components/YFFRFab';
import YFFRFooter from '../../components/YFFRFooter';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('Main screen component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainScreen />);
  });

  it('displays the correct markup', () => {
    const mainDiv = wrapper.find('section.main-screen');
    expect(mainDiv, 'must have section with class main-screen').to.have.length(1);

    expect(wrapper.find(YFFRLogo), 'must have the yffr logo').to.have.length(1);

    const pageHeader = wrapper.find(PageHeader);
    expect(pageHeader, 'must have a page header').to.have.length(1);
    expect(
      pageHeader.props(),
      'must have correct text rendered'
    ).to.have.property('text', MAIN_SCREEN_PAGE_HEADER_TEXT);

    const fabs = wrapper.find(YFFRFab);
    expect(fabs, 'should render the 3 different scenario fabs').to.have.length(3);

    const energyButton = fabs.at(0);
    expect(energyButton).to.have.prop('type', ENERGY_AND_FOCUS);

    const deescalationButton = fabs.at(1);
    expect(deescalationButton).to.have.prop('type', DEESCALATION);

    const ohShitButton = fabs.at(2);
    expect(ohShitButton).to.have.prop('type', OH_SHIT);

    const yffrFooter = wrapper.find(YFFRFooter);
    expect(yffrFooter).to.have.length(1);
  });
});