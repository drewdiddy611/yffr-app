import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SplashScreen from '../pages/SplashScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <SplashScreen />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
