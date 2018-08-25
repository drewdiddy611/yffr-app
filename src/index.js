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

    var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
    locationSetter(location);
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
  setLocation = location => {
    this.setState({location});
  }

  componentDidMount() {
    const location = '';
    setTimeout(() => {
      setLocation('');
    }, 2000)
  }

  render() {

    switch (this.state.location[0]) {
      case '':
        return <Link locationSetter={this.setLocation} href='#n'>
          <div><h1>Index Page</h1></div>
        </Link>
      case 'n':
        return <Link locationSetter={this.setLocation} href='#1'>
          <div><h1>n-word Page</h1></div>
        </Link>
      case '1':
        return <Link locationSetter={this.setLocation} href='#2'>
          <div><h1>1 Page</h1></div>
        </Link>
      case '2':        
        return <Link locationSetter={this.setLocation} href='#3'>
          <div><h1>2 Page</h1></div>
        </Link>
      default:
        return <Link locationSetter={this.setLocation} href=''>
          <div><h1>Not Found</h1></div>;
        </Link>
    }
  }
};

//handleNewHash()
window.addEventListener('loaded')
ReactDOM.render(<Application location={['']}/>, document.getElementById('root'));
// setTimeout(() => {
//   document.querySelector('h1').click();
// }, 2000);