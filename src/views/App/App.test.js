import React from 'react';
import { Route } from 'react-router';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';
import SplashScreen from '../pages/SplashScreen';
import MainScreen from '../pages/MainScreen';
import ContentScreen from '../pages/ContentScreen';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('App component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the correct markup', () => {
    const appDiv = wrapper.find('.App');
    const splashScreenRoute = appDiv.childAt(0);
    const expectedSplashRouteProps = {
      exact: true,
      path: '/',
      component: SplashScreen
    };

    const mainScreenRoute = appDiv.childAt(1);
    const expectedMainScreenRouteProps = {
      path: '/main',
      component: MainScreen
    };

    const contentScreenRoute = appDiv.childAt(2);
    const expectedContentScreenRouteProps = {
      path: '/content',
      component: ContentScreen
    };

    expect(appDiv).to.have.length(1);
    expect(appDiv.find(Route)).to.have.length(3);
    expect(splashScreenRoute.props()).to.deep.equal(expectedSplashRouteProps);
    expect(mainScreenRoute.props()).to.deep.equal(expectedMainScreenRouteProps);
    expect(mainScreenRoute.props()).to.deep.equal(expectedMainScreenRouteProps);
  });


});
