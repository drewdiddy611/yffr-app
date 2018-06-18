import React, { PureComponent } from 'react';

import YFFRLogo from '../../../components/YFFRLogo';

class ContentListPage extends PureComponent {
  render() {
    return (
      <div className="content-screen">
        <YFFRLogo />
        <div className="hr" />
      </div>
    );
  }
}

export default ContentListPage;