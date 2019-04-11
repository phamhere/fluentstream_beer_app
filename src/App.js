import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import DisplayBeers from './components/DisplayBeers';
import AddBeer from './components/AddBeer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/beers' component={DisplayBeers} />
        <Route path='/beers/new' component={AddBeer} />
      </div>
    );
  }
}

export default App;
