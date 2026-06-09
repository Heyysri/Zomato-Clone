import React from 'react';
import './RestaurantCard.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <div className="card-image">
        <span>{restaurant.emoji}</span>
      </div>
      <div className="card-body">
        <h3>{restaurant.name}</h3>
        <p className="cuisine">{restaurant.cuisine}</p>
        <div className="card-footer">
          <span className="rating">⭐ {restaurant.rating}</span>
          <span className="time">🕐 {restaurant.time}</span>
        </div>
        <p className="price">{restaurant.price}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
