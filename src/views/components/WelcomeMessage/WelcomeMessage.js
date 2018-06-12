import React from 'react';

const welcomeMessage =
  'Welcome users and describe the value you are ' +
  'adding with one/two sentences';

export default ({ message = welcomeMessage }) => {
  return <p className="welcome-message">{message}</p>;
};
