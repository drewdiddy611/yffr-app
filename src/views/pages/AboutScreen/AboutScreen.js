import React from 'react';

import './About.css';
import YFFRLogo from '../../components/YFFRLogo';
import PageHeader from '../../components/PageHeader';
import {
  ABOUT_US_SCREEN_PAGE_HEADER_TEXT
} from '../../App/application-constants';
import AboutUs from '../../components/AboutUs';
import YFFRFooter from '../../components/YFFRFooter';

export default () => {
  return (
    <section className="about-screen">
      <YFFRLogo />
      <span className="hr" />
      <PageHeader text={ABOUT_US_SCREEN_PAGE_HEADER_TEXT} />
      <AboutUs />
      <YFFRFooter />
    </section>
  );
};