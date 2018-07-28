import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import WelcomeMessage from './WelcomeMessage';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('Welcome message component testing', () => {
  it('displays the correct markup', () => {
    const wrapper = shallow(<WelcomeMessage />);
    const welcomeMessage =
      'Welcome users and describe the value you are ' +
      'adding with one/two sentences';
    const correctMarkup = <p className="welcome-message">{welcomeMessage}</p>;

    expect(wrapper).to.contain(correctMarkup);
  });
});
