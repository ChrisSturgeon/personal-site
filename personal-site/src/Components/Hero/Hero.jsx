import React from 'react';
import HeroNav from '../HeroNav/HeroNav';
import './Hero.css';

export default function Hero({ isMobile }) {
  return (
    <div className="hero">
      <div className="left">
        <h2>
          Chris
          <br /> Sturgeon
        </h2>
      </div>
      {!isMobile && <HeroNav />}
    </div>
  );
}
