import React from 'react';

import CropSquareIcon from '@material-ui/icons/CropSquare';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ListIcon from '@material-ui/icons/List';
import {
  ACTION_HOME,
  ACTION_CONTENT,
  ACTION_ABOUT
} from '../../App/application-constants';

const getIconByType = type => {
  // eslint-disable-next-line
  switch (type) {
    case ACTION_HOME:
      return <CropSquareIcon />;
    case ACTION_CONTENT:
      return <PlayCircleFilledIcon />;
    case ACTION_ABOUT:
      return <ListIcon />;
  }

  return null;
};

const getButtonStyle = () => ({
  background: 'transparent',
  border: 'none',
  fontSize: '0'
});

const YFFRAction = ({ type, onClick }) => {
  const Icon = getIconByType(type);
  return (
    <button type="button" style={getButtonStyle()} onClick={onClick}>
      {Icon}
    </button>
  );
}

export default YFFRAction;