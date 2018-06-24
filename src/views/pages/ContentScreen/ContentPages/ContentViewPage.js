import React from 'react'
import { withRouter } from 'react-router';
import ContentPlayer from '../../../components/ContentPlayer/ContentPlayer';

const ContentViewPage = ({ match }) => {
  const { params } = match;
  const {
    type,
    category,
    id
  } = params;
  return (
    <div className="content-screen">
      <ContentPlayer
        type={type}
        category={category}
        id={id} />
    </div>
  );
}

export default process.env.NODE_ENV === 'test' ?
  ContentViewPage : withRouter(ContentViewPage);