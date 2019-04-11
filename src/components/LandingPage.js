import React from 'react';
import { Button } from 'semantic-ui-react';

const LandingPage = props => {
  return (
    <div>
      <h1>Welcome to the FluentStream Beer Tap</h1>
      <Button
        style={{ background: '#1A3870', color: 'white' }}
        onClick={e => props.history.push('/beers')}
      >
        Enter The Cooler
      </Button>
    </div>
  );
};

export default LandingPage;
