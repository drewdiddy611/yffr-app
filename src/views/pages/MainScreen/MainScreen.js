import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';

import './Main.css';
import {
  RANDOM_ENERGY_AND_FOCUS_VIDEO,
  RANDOM_DEESCALATION_VIDEO,
  RANDOM_OH_SHIT_VIDEO
} from '../../App/application-constants';
import YFFRLogo from '../../components/YFFRLogo';
import PageHeader from '../../components/PageHeader';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../../components/PageHeader/page-header-constants';
import YFFRFab from '../../components/YFFRFab';
import YFFRFooter from '../../components/YFFRFooter';

import { MAIN_SCREEN_PAGE_HEADER_TEXT } from '../../App/application-constants';

const ACTION_MAP = {
  [ENERGY_AND_FOCUS]: RANDOM_ENERGY_AND_FOCUS_VIDEO,
  [DEESCALATION]: RANDOM_DEESCALATION_VIDEO,
  [OH_SHIT]: RANDOM_OH_SHIT_VIDEO
}

class MainScreen extends PureComponent {
  // TODO: Write tests for this
  redirectTo = action => () => {
    const { history } = this.props;

    history.push(ACTION_MAP[action]);
  }

  render() {
    return (
      <section className="main-screen">
        <YFFRLogo />
        <PageHeader text={MAIN_SCREEN_PAGE_HEADER_TEXT} />
        <YFFRFab
          type={ENERGY_AND_FOCUS}
          onClick={this.redirectTo(ENERGY_AND_FOCUS)} />
        <YFFRFab
          type={DEESCALATION}
          onClick={this.redirectTo(DEESCALATION)} />
        <YFFRFab
          type={OH_SHIT}
          onClick={this.redirectTo(OH_SHIT)} />
        <YFFRFooter />
      </section>
    )
  }
}

export default process.env.NODE_ENV === 'test' ?
  MainScreen : withRouter(MainScreen);