import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RestaurantList />
    </div>
  );
}

export default App;
