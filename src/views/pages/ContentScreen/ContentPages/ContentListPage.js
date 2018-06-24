import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';

import YFFRLogo from '../../../components/YFFRLogo';
import ContentListFilterBar from '../../../components/ContentListFilterBar';
import ContentListWrapper from '../../../components/ContentListWrapper';
import ContentItem from '../../../components/ContentItem';
import {
  CONTENT_URL
} from '../../../App/application-constants';


import CONTENT from '../../../../data/content-objects';

const getContentItems = (type, category) => {
  return CONTENT[type][category].map((item, contentId) => ({
    id: contentId,
    ...item,
    type,
    category
  }));
}

class ContentListPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: getContentItems('video', 'energy')
    };
  }

  redirectTo = item => () => {
    const { history } = this.props;
    const {
      id,
      type,
      category
    } = item;

    history.push(`${CONTENT_URL}/${category}/${id}/${type}`);
  }

  getItemsWithFilter = () => {
    return this.state.items.map(
      item =>
        <ContentItem
          key={item.title}
          onClick={this.redirectTo(item)}
          {...item} />
    );
  }

  render() {
    return (
      <div className="content-screen">
        <YFFRLogo />
        <span className="hr" />
        <ContentListFilterBar />
        <ContentListWrapper>
          {this.getItemsWithFilter()}
        </ContentListWrapper>
      </div>
    );
  }
}

export default process.env.NODE_ENV === 'test' ?
  ContentListPage : withRouter(ContentListPage);