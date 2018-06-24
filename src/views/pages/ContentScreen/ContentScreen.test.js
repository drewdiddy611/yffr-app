import React from 'react';
import { Route } from 'react-router';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ContentScreen from './ContentScreen';
import {
  CONTENT_URL,
  CONTENT_VIEW_URL
} from '../../App/application-constants';
import contentPages from './ContentPages';
import YFFRFooter from '../../components/YFFRFooter';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const {
  ContentListPage,
  ContentViewPage
} = contentPages;
describe('Content list page component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContentScreen />);
  });

  it('should render the correct markup', () => {
    const contentDiv = wrapper.find('.Content');

    const contentListRoute = contentDiv.childAt(0);
    const expectedContentListRouteProps = {
      exact: true,
      path: CONTENT_URL,
      component: ContentListPage
    };

    const contentViewRoute = contentDiv.childAt(1);
    const expectedContentViewRouteProps = {
      path: CONTENT_VIEW_URL,
      component: ContentViewPage
    };

    expect(contentDiv).to.have.length(1);
    expect(contentDiv.find(Route)).to.have.length(2);
    expect(contentListRoute.props()).to.deep.equal(expectedContentListRouteProps);
    expect(contentViewRoute.props()).to.deep.equal(expectedContentViewRouteProps);
  });

  it('should render the YFFR footer component', () => {
    expect(wrapper.find(YFFRFooter)).to.have.length(1);
  });
});