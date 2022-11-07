import React from 'react';
import HeroNav from '../HeroNav/HeroNav';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="left">Hero left</div>
      <HeroNav />
    </div>
  );
}
