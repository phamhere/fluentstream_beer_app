import React from 'react';
import axios from 'axios';
import { Segment, Form } from 'semantic-ui-react';

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

    axios
      .post('https://beer.fluentcloud.com/v1/beer', beerObj)
      .then(res => this.props.beerHandler())
      .catch(err => console.log(err));

    this.setState({ name: '', likes: 0 });
  };

  render() {
    const isEnabled = this.state.name.length > 0;
    return (
      <div className='addBeerFormDiv'>
        <Segment style={{ background: '#F2F2F2' }}>
          <Form onSubmit={this.submitHandler}>
            <Form.Group widths='equal'>
              <Form.Input label='Beer Name'>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Form.Input>
              <Form.Input label='Number of Likes'>
                <input
                  type='number'
                  name='likes'
                  value={this.state.likes}
                  onChange={this.handleInputChange}
                />
              </Form.Input>
              <Form.Button
                className='addBeerButton'
                style={{ background: '#1A3870', color: 'white' }}
                disabled={!isEnabled}
              >
                Add Beer
              </Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default AddBeer;
