import React from 'react';

const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page!</h1>
      <button onClick={e => props.history.push('/beers')}>Enter Site</button>
    </div>
  );
};

export default LandingPage;
