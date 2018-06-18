import React from 'react';

export default ({ children, middle }) => {
  const classNames = ['footerAction'];
  if (middle) {
    classNames.push('middle');
  }

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
};