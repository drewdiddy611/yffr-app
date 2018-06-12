import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplashScreen from '../pages/SplashScreen';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('App component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders the splash screen page by default', () => {
    const correctMarkup = (
      <div className="App">
        <Route exact path="/">
          <SplashScreen />
        </Route>
      </div>
    );

    expect(wrapper.contains(correctMarkup)).to.equal(true);
  });
});
