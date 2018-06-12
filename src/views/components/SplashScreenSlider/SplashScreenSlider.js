import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SplashScreenSlider = ({ pages }) => {
  try {
    if (pages === undefined || pages.length === 0)
      throw new Error('Must include at least one page for slider');
  } catch (e) {
    console.warn(e.message);
  } finally {
    const SLIDER_SETTINGS = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const sliderToRender = (
      <Slider {...SLIDER_SETTINGS}>
        {pages.map(Page => <Page key={Page.name} />)}
      </Slider>
    );

    return sliderToRender;
  }
};

SplashScreenSlider.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func)
};

export default SplashScreenSlider;
