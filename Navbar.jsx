import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
    <NavLink to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
      Home
    </NavLink>
    <NavLink to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
      About
    </NavLink>
    <NavLink to="/contact" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
      Contact
    </NavLink>
    <NavLink to="/users" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
      Users
    </NavLink>
  </nav>
);

export default Navbar;
