import React from 'react';
import { configure, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { Redirect, MemoryRouter } from 'react-router';

import RedirectToMain, { MAIN_ROUTE } from './RedirectToMain';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('Redirect to main screen functional component testing', () => {
  let wrapper;
  beforeEach(() => {
    sinon.stub(console, 'error');
    wrapper = mount(
      <MemoryRouter>
        <RedirectToMain />
      </MemoryRouter>
    );
  })

  it('renders the correct markup', () => {
    const redirectWrapper = wrapper.find(Redirect);

    expect(redirectWrapper).to.have.length(1);
    expect(redirectWrapper).to.have.prop('to', MAIN_ROUTE);
  });

  afterEach(() => {
    console.error.restore();
  });
});