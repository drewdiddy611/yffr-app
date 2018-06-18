import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import FooterAction from '../FooterAction';
import YFFRAction from '../YFFRAction';
import {
  ACTION_HOME,
  ACTION_CONTENT,
  ACTION_ABOUT
} from '../../App/application-constants';

const ACTION_MAP = {
  [ACTION_HOME]: '/main',
  [ACTION_CONTENT]: '/content',
  [ACTION_ABOUT]: '/about'
};

class YFFRFooter extends PureComponent {
  // TODO: Write tests for this
  redirectTo = action => () => {
    const { history } = this.props;

    history.push(ACTION_MAP[action]);
  }

  render() {
    return (
      <div className="yffr-footer">
        <FooterAction>
          <YFFRAction
            type={ACTION_HOME}
            onClick={this.redirectTo(ACTION_HOME)} />
        </FooterAction>
        <FooterAction middle>
          <YFFRAction
            type={ACTION_CONTENT}
            onClick={this.redirectTo(ACTION_CONTENT)} />
        </FooterAction>
        <FooterAction>
          <YFFRAction
            type={ACTION_ABOUT}
            onClick={this.redirectTo(ACTION_ABOUT)} />
        </FooterAction>
      </div>
    );
  }
}

export default process.env.NODE_ENV === 'test' ?
  YFFRFooter : withRouter(YFFRFooter);