import React from 'react';
import { Route } from 'react-router';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';
import {
  SPLASH_URL,
  HOME_URL,
  CONTENT_URL,
  ABOUT_URL
} from '../App/application-constants';
import SplashScreen from '../pages/SplashScreen';
import MainScreen from '../pages/MainScreen';
import ContentScreen from '../pages/ContentScreen';
import AboutScreen from '../pages/AboutScreen';

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

    const mainScreenRoute = appDiv.childAt(0);
    const expectedMainScreenRouteProps = {
      path: HOME_URL,
      component: MainScreen
    };

    const contentScreenRoute = appDiv.childAt(1);
    const expectedContentScreenRouteProps = {
      path: CONTENT_URL,
      component: ContentScreen
    };

    const aboutScreenRoute = appDiv.childAt(2);
    const expectedAboutScreenRouteProps = {
      path: ABOUT_URL,
      component: AboutScreen
    };

    const splashScreenRoute = appDiv.childAt(3);
    const expectedSplashRouteProps = {
      exact: true,
      path: SPLASH_URL,
      component: SplashScreen
    };

    expect(appDiv).to.have.length(1);
    expect(appDiv.find(Route)).to.have.length(4);
    expect(mainScreenRoute.props()).to.deep.equal(expectedMainScreenRouteProps);
    expect(contentScreenRoute.props()).to.deep.equal(expectedContentScreenRouteProps);
    expect(aboutScreenRoute.props()).to.deep.equal(expectedAboutScreenRouteProps);
    expect(splashScreenRoute.props()).to.deep.equal(expectedSplashRouteProps);
  });


});
