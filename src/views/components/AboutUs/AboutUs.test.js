import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';

import AboutUs from './AboutUs';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const chance = new Chance();
const givenText = () => chance.string();

describe('About Us component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AboutUs />);
  });

  it('renders the correct markup', () => {
    const mainDiv = wrapper.find('div.about-us');

    expect(mainDiv).to.have.length(1);
    expect(mainDiv.find('p')).to.have.length(5);
  })
});