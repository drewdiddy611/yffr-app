import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import {
  SPLASH_URL,
  HOME_URL,
  CONTENT_URL,
  ABOUT_URL
} from './application-constants';
import SplashScreen from '../pages/SplashScreen';
import MainScreen from '../pages/MainScreen';
import ContentScreen from '../pages/ContentScreen';
import AboutScreen from '../pages/AboutScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={SPLASH_URL} component={SplashScreen} />
          <Route path={HOME_URL} component={MainScreen} />
          <Route path={CONTENT_URL} component={ContentScreen} />
          <Route path={ABOUT_URL} component={AboutScreen} />
          <Route component={SpashScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
