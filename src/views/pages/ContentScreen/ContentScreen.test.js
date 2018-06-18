import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ContentScreen from './ContentScreen';
import contentPages from './ContentPages';
import YFFRFooter from '../../components/YFFRFooter';

// import YFFRLogo from '../../components/YFFRLogo';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());


describe('Content screen component testing', () => {
  const {
    ContentListPage
  } = contentPages;
  describe('Content list page component testing', () => {
    let contentListPageWrapper;
    beforeEach(() => {
      contentListPageWrapper = shallow(<ContentScreen />);
    });

    it('should render the correct markup', () => {
      const contentDiv = contentListPageWrapper.find('.Content');
      const ContentListRoute = contentDiv.childAt(0);
      const expectedContentListRouteProps = {
        exact: true,
        path: '/',
        component: ContentListPage
      };

    });

    it('should render the YFFR footer component', () => {
      expect(contentListPageWrapper.find(YFFRFooter)).to.have.length(1);
    });
  })
  // it('should render the correct markup', () => {

  //   const contentDiv = wrapper.find('.Content');
  //   const ContentListRoute = contentDiv.childAt(0);
  //   const expectedContentListRouteProps = {
  //     exact: true,
  //     path: '/',
  //     component: SplashScreen
  //   };

  //   // const mainDiv = wrapper.find('div.content-screen');
  //   // expect(mainDiv, 'must have div with class content-screen').to.have.length(1);

  //   // expect(wrapper.find(YFFRLogo), 'must have the yffr logo').to.have.length(1);
  //   // expect(
  //   //   wrapper.find('hr'),
  //   //   'must have a horizontal rule separating logo and content'
  //   // ).to.have.length(1);
  // });
});