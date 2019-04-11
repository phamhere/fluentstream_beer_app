import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import DisplayBeers from './components/DisplayBeers';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/beers' component={DisplayBeers} />
      </div>
    );
  }
}

export default App;
