import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OhShitIcon from '@material-ui/icons/PriorityHigh';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../PageHeader/page-header-constants';
const getPropsFromType = type => {
  const defaultProps = {
    variant: 'fab',
    color: 'primary'
  };

  // eslint-disable-next-line
  switch (type) {
    case ENERGY_AND_FOCUS:
      return {
        ...defaultProps,
        className: 'btn-default',
        'aria-label': 'Energy and Focus'
      }
    case DEESCALATION:
      return {
        ...defaultProps,
        className: 'btn-default',
        'aria-label': 'Deescalation'
      }
    case OH_SHIT:
      return {
        ...defaultProps,
        className: 'btn-oh-shit',
        'aria-label': 'Oh Shit!'
      }
  }

  return defaultProps;
};

const getIconFromType = type => {
  // eslint-disable-next-line
  switch (type) {
    case ENERGY_AND_FOCUS:
      return <AddIcon />;
    case DEESCALATION:
      return <RemoveIcon />;
    case OH_SHIT:
      return <OhShitIcon />;
  }

  return null;
};

export default ({ type, onClick }) => {
  const buttonProps = getPropsFromType(type);
  const Icon = getIconFromType(type);

  return (
    <div className="poa-fab">
      <Button {...buttonProps} onClick={onClick}>
        {Icon}
      </Button>
    </div>
  );
};
