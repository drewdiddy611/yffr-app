import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';

function render(MainApplication) {
  return (
    <CookiesProvider>
      <MainApplication />
    </CookiesProvider>
  );
}

ReactDOM.render(render(App), document.getElementById('root'));
registerServiceWorker();
