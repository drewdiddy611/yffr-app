import React, { Component } from 'react';
import './Splash.css';
import SplashScreenSlider from '../../components/SplashScreenSlider';
import splashPages from './SplashPages';

class SplashScreen extends Component {
  render() {
    return (
      <section className="splash-screen">
        <SplashScreenSlider pages={splashPages} />
      </section>
    );
  }
}

export default SplashScreen;
