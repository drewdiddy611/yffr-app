import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import AboutScreen from './AboutScreen';
import YFFRLogo from '../../components/YFFRLogo'
import PageHeader from '../../components/PageHeader';
import AboutUs from '../../components/AboutUs';
import { ABOUT_US_SCREEN_PAGE_HEADER_TEXT } from '../../App/application-constants';
import YFFRFooter from '../../components/YFFRFooter';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('Main screen component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AboutScreen />);
  });

  it('displays the correct markup', () => {
    const mainDiv = wrapper.find('section.about-screen');
    expect(mainDiv, 'must have section with class about-screen').to.have.length(1);

    expect(mainDiv.find(YFFRLogo), 'must have the yffr logo').to.have.length(1);

    expect(
      mainDiv.find('.hr'),
      'must have a horizontal rule separating logo and content'
    ).to.have.length(1);

    const pageHeader = mainDiv.find(PageHeader);
    expect(pageHeader, 'must have a page header').to.have.length(1);
    expect(
      pageHeader.props(),
      'must have correct text rendered'
    ).to.have.property('text', ABOUT_US_SCREEN_PAGE_HEADER_TEXT);

    const aboutUs = mainDiv.find(AboutUs);
    expect(aboutUs).to.have.length(1);

    const yffrFooter = mainDiv.find(YFFRFooter);
    expect(yffrFooter).to.have.length(1);
  });
});