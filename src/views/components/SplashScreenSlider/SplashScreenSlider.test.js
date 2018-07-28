import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';

import Slider from 'react-slick';
import SplashScreenSlider from './SplashScreenSlider';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const chance = new Chance();
const givenPageCount = () => chance.natural({ min: 2, max: 10 });
const NUM_SLIDES = givenPageCount();
const givenSplashPage = (pageName = chance.string()) => () => (
  <div key={chance.string()}>Splash Page: {pageName}</div>
);
const givenSplashPages = count => chance.n(givenSplashPage, count);

describe('Splash screen slider wrapper testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SplashScreenSlider pages={givenSplashPages(NUM_SLIDES)} />
    );
  });

  it('should set default props for splash screen slider', () => {
    const correctProps = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const wrapperProps = wrapper.props();

    expect(wrapper, 'component should contain a slider').to.have.type(Slider);
    expect(
      wrapperProps,
      'slider component should have correct properties'
    ).deep.include(correctProps);
  });

  it('should render one page passed to it', () => {
    wrapper = shallow(<SplashScreenSlider pages={[givenSplashPage()]} />);
    const wrapperProps = wrapper.props();

    expect(wrapperProps.children, 'correctly renders one page').to.not.equal(
      undefined
    );
  });

  it('should render multiple pages passed to it', () => {
    const wrapperProps = wrapper.props();

    expect(
      wrapperProps.children.length,
      'correctly renders multiple pages'
    ).to.equal(NUM_SLIDES);
  });
});
