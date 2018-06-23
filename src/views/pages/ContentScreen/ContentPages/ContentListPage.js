import React, { PureComponent } from 'react';

import YFFRLogo from '../../../components/YFFRLogo';
import ContentListFilterBar from '../../../components/ContentListFilterBar';
import ContentListWrapper from '../../../components/ContentListWrapper';
import ContentItem from '../../../components/ContentItem';

import content from '../../../../data/content-objects';

const getContentItems = (type, category) => {
  return content[type][category];
}

class ContentListPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: getContentItems('video', 'energy')
    };
  }

  getItemsWithFilter = () => {
    return this.state.items.map(item => <ContentItem key={item.title} {...item} />);
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

export default ContentListPage;