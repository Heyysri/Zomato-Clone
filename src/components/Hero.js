import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [search, setSearch] = useState('');

  return (
    <div className="hero">
      <h1>Find the best restaurants near you</h1>
      <p>Discover great places to eat in your city</p>
      <input
        type="text"
        placeholder="Search for restaurants or cuisines..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Hero;
