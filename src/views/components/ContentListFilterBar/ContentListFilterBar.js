import React, { PureComponent } from 'react';
import {
  FILTER_TYPE_BUTTON_ID,
  FOCUS_AREA_BUTTON_ID
} from './content-list-filter-bar-constants';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';

const ELEMENT_ID_MAP = {
  [FILTER_TYPE_BUTTON_ID]: 'filterTypeEl',
  [FOCUS_AREA_BUTTON_ID]: 'focusAreaEl'
};
class ContentListFilterBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterTypeEl: null,
      focusAreaEl: null
    };
  }

  handleClick = e => {
    this.setState({
      [ELEMENT_ID_MAP[e.target.id]]: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      filterTypeEl: null,
      focusAreaEl: null
    });
  }

  render() {
    const defaultButtonProps = {
      variant: 'contained',
      color: 'primary',
      size: 'medium'
    };

    return (
      <div className="content-filter-bar">
        <Button
          {...defaultButtonProps}
          aria-label={'Filter type menu button'}>
          <ExpandMore />
          Filter Type
        </Button>
        <Button
          {...defaultButtonProps}
          aria-label={'Focus area menu button'}>
          <ExpandMore />
          Focus Area
        </Button>
      </div>
    );
  }
}

export default ContentListFilterBar;