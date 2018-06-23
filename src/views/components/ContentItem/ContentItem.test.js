import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ContentItem from './ContentItem';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const givenContentItem = () => ({
  title: "Test Title One",
  url: "https://www.youtube.com/watch?v=U2rzQuN6ivo"
})

describe('Content Item component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContentItem {...givenContentItem()} />);
  });

  it('should render the video player and content title', () => {
    const mainDiv = wrapper.find('div.content-item');

    expect(
      mainDiv,
      'must have div with class content-item'
    ).to.have.length(1);

    const imageWrapper = mainDiv.childAt(0);
    expect(
      imageWrapper,
      'must have the image wrapper for styling'
    ).to.have.length(1).and.to.have.type('div');

    const thumbnail = imageWrapper.childAt(0);
    expect(
      thumbnail,
      'must have the img tag'
    ).to.have.length(1).and.to.have.type('img');
    expect(
      thumbnail.props(),
      'img tag uses the thumbnail url from the content item'
    ).to.deep.include({ 'src': givenContentItem().thumbnail });
  });
});