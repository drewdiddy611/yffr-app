import React, { PureComponent } from 'react';
import {
  FILTER_TYPE_BUTTON_ID,
  FOCUS_AREA_BUTTON_ID,
  FILTER_TYPE_MENU_ID,
  FOCUS_AREA_MENU_ID
} from './content-list-filter-bar-constants';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

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
      [ELEMENT_ID_MAP[e.currentTarget.id]]: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      filterTypeEl: null,
      focusAreaEl: null
    });
  }

  getButtonBropsById = id => {
    const defaultButtonProps = {
      'aria-haspopup': true,
      id,
      color: 'primary',
      onClick: this.handleClick,
      size: 'medium',
      variant: 'contained'
    };

    switch (id) {
      case FILTER_TYPE_BUTTON_ID:
        return {
          ...defaultButtonProps,
          'aria-label': 'Filter type menu button',
          'aria-owns': this.state.filterTypeEl ? FILTER_TYPE_MENU_ID : null
        }
      case FOCUS_AREA_BUTTON_ID:
        return {
          ...defaultButtonProps,
          'aria-label': 'Focus area menu button',
          'aria-owns': this.state.focusAreaEl ? FOCUS_AREA_MENU_ID : null
        }
    }

    return undefined;
  }

  getMenuPropsById = (id, anchorEl) => ({
    id,
    anchorEl,
    open: !!anchorEl,
    onClose: this.handleClose
  });

  getMenuItemProps = () => ({
    onClick: this.handleClose
  });

  render() {
    const {
      filterTypeEl,
      focusAreaEl
    } = this.state;
    const menuItemProps = this.getMenuItemProps();

    return (
      <div className="content-filter-bar">
        <Button {...this.getButtonBropsById(FILTER_TYPE_BUTTON_ID)}>
          <ExpandMore />
          Filter Type
        </Button>
        <Menu {...this.getMenuPropsById(FILTER_TYPE_MENU_ID, filterTypeEl)}>
          {/* SPIKE */}
          <MenuItem {...menuItemProps}>Audio Clips</MenuItem>
          <MenuItem {...menuItemProps}>Video Clips</MenuItem>
          {/* END SPIKE */}
        </Menu>
        <Button {...this.getButtonBropsById(FOCUS_AREA_BUTTON_ID)}>
          <ExpandMore />
          Focus Area
        </Button>
        <Menu {...this.getMenuPropsById(FOCUS_AREA_MENU_ID, focusAreaEl)}>
          {/* SPIKE */}
          <MenuItem {...menuItemProps}>Energy & Focus</MenuItem>
          <MenuItem {...menuItemProps}>Deescalation</MenuItem>
          <MenuItem {...menuItemProps}>Oh Shit!</MenuItem>
          {/* END SPIKE */}
        </Menu>
      </div>
    );
  }
}

export default ContentListFilterBar;