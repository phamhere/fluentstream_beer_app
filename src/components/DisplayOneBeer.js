import React from 'react';
import axios from 'axios';

class DisplayOneBeer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.beer.likes
    };
  }

  incrementLikes = () => {
    axios
      .put(`https://beer.fluentcloud.com/v1/beer/${this.props.beer.id}`, {
        likes: this.state.likes + 1
      })
      .then(res => this.setState({ likes: this.state.likes + 1 }))
      .catch(err => console.log(err));
  };

  decrementLikes = () => {
    axios
      .put(`https://beer.fluentcloud.com/v1/beer/${this.props.beer.id}`, {
        likes: this.state.likes - 1
      })
      .then(res => this.setState({ likes: this.state.likes - 1 }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <p>Beer Name: {this.props.beer.name}</p>
        <p>
          Likes: <button onClick={this.decrementLikes}>-</button>{' '}
          {this.state.likes} <button onClick={this.incrementLikes}>+</button>
        </p>
      </div>
    );
  }
}

export default DisplayOneBeer;
