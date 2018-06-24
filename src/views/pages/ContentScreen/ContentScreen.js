import React, { PureComponent } from 'react';
import { Route } from 'react-router';

import './Content.css';
import {
  CONTENT_URL,
  CONTENT_VIEW_URL
} from '../../App/application-constants';
import contentPages from './ContentPages';
import YFFRFooter from '../../components/YFFRFooter';


const {
  ContentListPage,
  ContentViewPage
} = contentPages;
class ContentScreen extends PureComponent {
  render() {
    return (
      <section className="Content">
        <Route exact path={CONTENT_URL} component={ContentListPage} />
        <Route path={CONTENT_VIEW_URL} component={ContentViewPage} />
        <YFFRFooter />
      </section>
    );
  }
}

export default ContentScreen;