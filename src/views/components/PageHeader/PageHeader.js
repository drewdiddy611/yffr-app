import React from 'react';

import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT,
  TRAINING_AND_DEVELOPMENT
} from './page-header-constants';

export default ({ type, text }) => {
  let className;
  switch (type) {
    case ENERGY_AND_FOCUS:
      className = 'energy-and-focus';
      break;
    case DEESCALATION:
      className = 'deescalation';
      break;
    case OH_SHIT:
      className = 'oh-shit';
      break;
    case TRAINING_AND_DEVELOPMENT:
      className = 'training-and-development';
      break;
    default:
      className = 'default-page-header';
  }
  return <h1 className={className}>{text}</h1>;
};
