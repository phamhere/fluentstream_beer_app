import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import DisplayBeers from './components/DisplayBeers';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/beers' component={DisplayBeers} />
      </div>
    );
  }
}

export default App;
