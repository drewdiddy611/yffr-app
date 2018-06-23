import React from 'react';

export const NoResults = () => {
  return (
    <p className="no-results">No results were found</p>
  );
}

export default ({ children }) => {
  return (
    <div className="content-list">
      {!children || !children.length ? <NoResults /> : children}
    </div>
  );
};