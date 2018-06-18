import React, { PureComponent } from 'react';
import { Route } from 'react-router';

import './Content.css';
import {
  CONTENT_URL
} from '../../App/application-constants';
import contentPages from './ContentPages';
import YFFRLogo from '../../components/YFFRLogo';
import YFFRFooter from '../../components/YFFRFooter';

const {
  ContentListPage
} = contentPages;
class ContentScreen extends PureComponent {
  render() {
    return (
      <section className="Content">
        <Route exact path={CONTENT_URL} component={ContentListPage} />
        <YFFRFooter />
      </section>
    );
  }
}

export default ContentScreen;