import React from 'react';
import {
  ABOUT_US_TEXT,
  ABOUT_US_TEXT_TWO,
  ABOUT_US_TEXT_THREE,
  ABOUT_US_TEXT_FOUR,
  ABOUT_US_TEXT_FIVE
} from '../../App/application-constants';
export default () => {
  return (
    <div className="about-us">
      <p>{ABOUT_US_TEXT}</p>
      <p>{ABOUT_US_TEXT_TWO}</p>
      <p>{ABOUT_US_TEXT_THREE}</p>
      <p>{ABOUT_US_TEXT_FOUR}</p>
      <p>{ABOUT_US_TEXT_FIVE}</p>
    </div>
  );
};