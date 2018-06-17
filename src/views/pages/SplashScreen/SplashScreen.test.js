import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import RedirectToMain from '../../components/RedirectToMain';
import SplashScreen from './SplashScreen';
import SplashScreenSlider from '../../components/SplashScreenSlider';
import splashPages from './SplashPages';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });

describe('Splash screen component testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SplashScreen />);
  });

  it('redirects the user to /main if they have seen the intro pages', () => {
    const props = {
      cookies: {
        get: () => true
      }
    };
    wrapper = shallow(<SplashScreen {...props} />);

    expect(wrapper.find(RedirectToMain)).to.have.length(1);
  });

  it('should render correct markup', () => {
    const correctMarkup = (
      <section className="splash-screen">
        <SplashScreenSlider pages={splashPages} />
      </section>
    );

    expect(
      wrapper.contains(correctMarkup),
      'should contain the splash screen slider'
    ).to.equal(true);
  });
});
