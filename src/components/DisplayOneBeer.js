import React from 'react';
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react';

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
      <Card style={{ margin: '10px' }}>
        <Card.Content>
          <Card.Header>{this.props.beer.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            Likes:{' '}
            <Icon
              style={{ color: '#1A3870', marginRight: '0' }}
              onClick={this.decrementLikes}
              name='minus square'
            />
            {this.state.likes}
            <Icon
              style={{ color: '#1A3870' }}
              onClick={this.incrementLikes}
              name='plus square'
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default DisplayOneBeer;
