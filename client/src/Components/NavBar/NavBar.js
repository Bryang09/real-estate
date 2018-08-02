import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="Estate_NavBar">
      <h2><Link to="/">Bryan's Listings</Link></h2>
      <div className="Estate_Navigation">
        <h3><Link to="/apartments">Apartments</Link></h3>
        <h3><Link to="/houses">Houses</Link></h3>
      </div>
    </div>
  )
}

export default NavBar;