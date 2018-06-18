import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import FooterAction from './FooterAction';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('FooterAction component testing', () => {
  let wrapper;

  it('should render correct markup when not a middle action', () => {
    wrapper = shallow(
      <FooterAction>
        <div>child</div>
      </FooterAction>
    );

    const actionDiv = wrapper.find('div.footerAction');
    expect(actionDiv).to.have.length(1);
    expect(actionDiv.children()).to.have.length.greaterThan(0);
  })

  it('should render correct markup when a middle action', () => {
    wrapper = shallow(
      <FooterAction middle>
        <div>child</div>
      </FooterAction>
    );

    const actionDiv = wrapper.find('div.footerAction.middle');
    expect(actionDiv).to.have.length(1);
    expect(actionDiv.children()).to.have.length.greaterThan(0);
  })
});