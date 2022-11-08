import React from 'react';
import HeroNav from '../HeroNav/HeroNav';
import './Hero.css';

export default function Hero({
  isMobile,
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <div className="hero">
      <div className="left">
        <h2>
          Chris
          <br /> Sturgeon
        </h2>
      </div>
      {!isMobile && (
        <HeroNav
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}
    </div>
  );
}
