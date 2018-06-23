import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';
import ContentListWrapper, { NoResults } from './ContentListWrapper';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const chance = new Chance();

const givenChild = () => ({
  title: chance.string(),
  url: chance.url(),
  thumbnail: chance.url()
});
const givenChildren = () => chance.n(givenChild, chance.d6());

describe('Content Item component testing', () => {
  let wrapper, children;
  beforeEach(() => {
    children = givenChildren();
    wrapper = shallow(
      <ContentListWrapper>
        {children}
      </ContentListWrapper>
    );
  });

  it('should render the container with children', () => {
    const mainDiv = wrapper.find('div.content-list');

    expect(mainDiv).to.have.length(1);
    expect(mainDiv.children()).to.have.length(children.length);
  });

  it('should render the container without children', () => {
    wrapper = shallow(
      <ContentListWrapper>
      </ContentListWrapper>
    );
    const mainDiv = wrapper.find('div.content-list');

    expect(mainDiv).to.have.length(1);
    expect(mainDiv.children()).to.have.length(1);
    expect(
      mainDiv.find(NoResults),
      'must show NoResults when no results are available'
    ).to.have.length(1);
  });
});