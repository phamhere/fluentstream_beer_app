import React from 'react';
import axios from 'axios';

class AddBeer extends React.Component {
  state = {
    name: '',
    likes: 0
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const beerObj = {
      name: this.state.name,
      likes: this.state.likes
    };

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .post('https://beer.fluentcloud.com/v1/beer', beerObj, axiosConfig)
      .then(res => this.props.beerHandler())
      .catch(err => console.log(err));

    this.setState({ name: '', likes: 0 });
  };

  render() {
    const isEnabled = this.state.name.length > 0;
    return (
      <div>
        <h2>Add a Beer!</h2>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type='number'
            name='likes'
            value={this.state.likes}
            onChange={this.handleInputChange}
          />
          <button disabled={!isEnabled}>Add Beer</button>
        </form>
      </div>
    );
  }
}

export default AddBeer;
