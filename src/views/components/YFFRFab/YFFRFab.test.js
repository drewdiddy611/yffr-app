import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFR floating action button component testing', () => {
  it('should render a floating action button', () => {});
});
