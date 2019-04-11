import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/beers'>The Cooler</NavLink>
      <NavLink to='/beers/new'>Add Beer</NavLink>
    </div>
  );
};

export default NavBar;
