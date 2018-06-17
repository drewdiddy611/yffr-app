import React, { PureComponent } from 'react';
import { withCookies } from 'react-cookie';
import './Splash.css';
import SplashScreenSlider from '../../components/SplashScreenSlider';
import splashPages from './SplashPages';
import RedirectToMain from '../../components/RedirectToMain';

import { SPLASH_PAGE_CONFIRM_COOKIE } from '../../App/application-constants';

const shouldRedirect = cookies =>
  cookies && cookies.get && !!cookies.get(SPLASH_PAGE_CONFIRM_COOKIE);
class SplashScreen extends PureComponent {
  render() {
    const { cookies } = this.props;

    return shouldRedirect(cookies) ? <RedirectToMain /> :
      (
        <section className="splash-screen">
          <SplashScreenSlider pages={splashPages} />
        </section>
      );
  }
}

export default process.env.NODE_ENV === 'test' ?
  SplashScreen : withCookies(SplashScreen);
