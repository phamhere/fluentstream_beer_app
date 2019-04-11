import React from 'react';

const DisplayOneBeer = props => {
  return (
    <div>
      <p>Beer Name: {props.beer.name}</p>
      <p>Likes: {props.beer.likes} +</p>
    </div>
  );
};

export default DisplayOneBeer;
