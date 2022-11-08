import React from 'react';
import './HeroNav.css';

export default function HeroNav({
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <nav className="hero-nav">
      <button onClick={() => handleScroll(aboutRef)}>About</button>
      <button onClick={() => handleScroll(projectsRef)}>Projects</button>
      <button onClick={() => handleScroll(contactRef)}>Contact</button>
    </nav>
  );
}
