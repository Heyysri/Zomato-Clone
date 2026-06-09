import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Zomato</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Restaurants</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
