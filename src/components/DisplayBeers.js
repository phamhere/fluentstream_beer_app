import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

import AddBeer from './AddBeer';
import DisplayOneBeer from './DisplayOneBeer';

class DisplayBeers extends React.Component {
  state = {
    beers: [],
    addBeer: false
  };

  componentDidMount() {
    axios
      .get('https://beer.fluentcloud.com/v1/beer')
      .then(res => this.setState({ beers: res.data }))
      .catch(err => console.log(err));
  }

  beerHandler = () => {
    this.componentDidMount();
  };

  toggleAddBeer = () => {
    this.setState({ addBeer: !this.state.addBeer });
  };

  render() {
    return (
      <div>
        <h1>Inside the Cooler</h1>
        <Button
          style={{ background: '#1A3870', color: 'white' }}
          onClick={this.toggleAddBeer}
        >
          Toggle Beer Form
        </Button>
        {this.state.addBeer && <AddBeer beerHandler={this.beerHandler} />}
        <div className='displayBeerDiv'>
          {this.state.beers.map(beer => (
            <DisplayOneBeer
              key={beer.id}
              beer={beer}
              beerHandler={this.beerHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayBeers;
