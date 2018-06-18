import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import YFFRFooter from './YFFRFooter';
import FooterAction from '../FooterAction';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFRFooter functional component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<YFFRFooter />);
  });

  it('renders the correct markup', () => {
    const footerDiv = wrapper.find('div.yffr-footer');
    expect(footerDiv).to.have.length(1);

    const footerActions = footerDiv.find(FooterAction);
    expect(footerActions).to.have.length(3);
  });
});