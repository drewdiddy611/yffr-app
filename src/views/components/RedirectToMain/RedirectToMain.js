import React from 'react';
import { Redirect } from 'react-router';

export const MAIN_ROUTE = '/main';
const RedirectToMain = () => {
  return <Redirect to={MAIN_ROUTE} />
}

export default RedirectToMain;