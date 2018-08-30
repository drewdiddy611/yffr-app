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

const Link = ({children, href, locationSetter}) => {
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
  constructor(props){
    super();
    this.state = {
      location: props.location
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', (e) => {
      const location = e.newURL.split('#')[1] || '';
      this.setState({
        location
      });
    });
  }

  setLocation = location => {
  
  }

  render() {

    switch (this.state.location) {
      case 'asdf':
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
        return <Link href='#asdf'>
          <div><h1>Not Found</h1></div>
        </Link>
    }
  }
};

//handleNewHash()
window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application location={'asdf'}/>, document.getElementById('root'));
});

