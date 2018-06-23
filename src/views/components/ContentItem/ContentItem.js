import React from 'react';

export default ({ title, thumbnail, onClick }) => {
  return (
    <div className="content-item" onClick={onClick}>
      <div className="thumbnail-wrapper">
        <img src={thumbnail} />
      </div>
      <p>{title}</p>
    </div>
  );
};