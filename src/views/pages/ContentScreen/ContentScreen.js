import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router';

import './Content.css';
import {
  CONTENT_URL
} from '../../App/application-constants';
import YFFRLogo from '../../components/YFFRLogo';
import YFFRFooter from '../../components/YFFRFooter';

class ContentScreen extends PureComponent {
  render() {
    return (
      <section className="Content">
        <Route exact path={CONTENT_URL} render={() => {
          return (
            <div className="content-screen">
              <YFFRLogo />
              <div class="hr" />
            </div>
          );
        }} />
        <YFFRFooter />
      </section>
    );
  }
}

export default ContentScreen;