import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

const restaurants = [
  { id: 1, name: "Burger King", cuisine: "Burgers, Fast Food", rating: 4.2, time: "30 min", price: "₹200 for two", emoji: "🍔" },
  { id: 2, name: "Pizza Hut", cuisine: "Pizza, Italian", rating: 4.0, time: "40 min", price: "₹400 for two", emoji: "🍕" },
  { id: 3, name: "Dominos", cuisine: "Pizza, Pasta", rating: 4.3, time: "25 min", price: "₹350 for two", emoji: "🍕" },
  { id: 4, name: "KFC", cuisine: "Chicken, Fast Food", rating: 4.1, time: "35 min", price: "₹300 for two", emoji: "🍗" },
  { id: 5, name: "Subway", cuisine: "Healthy, Sandwiches", rating: 3.9, time: "20 min", price: "₹250 for two", emoji: "🥪" },
  { id: 6, name: "McDonalds", cuisine: "Burgers, Fast Food", rating: 4.2, time: "30 min", price: "₹200 for two", emoji: "🍟" },
  { id: 7, name: "Fassos", cuisine: "Wraps, Fast Food", rating: 4.0, time: "25 min", price: "₹150 for two", emoji: "🌯" },
  { id: 8, name: "Haldirams", cuisine: "Indian, Snacks", rating: 4.4, time: "20 min", price: "₹300 for two", emoji: "🍛" },
];

function RestaurantList() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Fast Food', 'Pizza', 'Indian', 'Healthy'];

  const filtered = filter === 'All'
    ? restaurants
    : restaurants.filter(r => r.cuisine.includes(filter));

  return (
    <div className="restaurant-section">
      <h2>Popular Restaurants</h2>
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map(r => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
