import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';

// function render(MainApplication) {
//   return (
//     <CookiesProvider>
//       <MainApplication />
//     </CookiesProvider>
//   );
// }

// ReactDOM.render(render(App), document.getElementById('root'));
// registerServiceWorker();

const Link = ({children, href}) => {
  const style = {
    cusrsor: 'pointer'
  };

  const changeHash = () => {
    window.location.href = href;
  }

  return (
    <span onClick={changeHash} style={style}>
      {children}
    </span>
  );
}

class Application extends React.Component {
  render() {
    return <Link href='#n'>
    <div><h1>Index Page</h1></div>
  </Link>

    switch (this.props.location[0]) {
      case '':
        return <Link href='#n'>
          <div><h1>Index Page</h1></div>
        </Link>
      case 'n':
        return <Link href='#1'>
          <div><h1>n-word Page</h1></div>
        </Link>
      case '1':
        return <Link href='#2'>
          <div><h1>1 Page</h1></div>
        </Link>
      case '2':
        return <Link href='#3'>
          <div><h1>2 Page</h1></div>
        </Link>
      default:
        return <div><h1>Not Found</h1></div>;
    }
  }
};

// Split location into `/` separated parts, then render `Application` with it
function handleNewHash() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  var application = <Application location={location} />;
  ReactDOM.render(application, document.getElementById('root'));
}

// Handle the initial route and browser navigation events
window.addEventListener('hashchange', handleNewHash, false);
handleNewHash()