import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = props => {
  return (
    <Menu style={{ background: '#F2F2F2' }}>
      <NavLink to='/'>
        <Menu.Item>Home</Menu.Item>
      </NavLink>
      <NavLink to='/beers'>
        <Menu.Item>The Cooler</Menu.Item>
      </NavLink>
    </Menu>
  );
};

export default NavBar;
