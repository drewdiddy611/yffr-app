import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';
import SplashScreen from '../pages/SplashScreen';

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

    expect(appDiv).to.have.length(1);
    expect(splashScreenRoute.props()).to.deep.equal(expectedSplashRouteProps);
  });


});
