import React from 'react';
import './HeroNav.css';
import { Link } from 'react-router-dom';

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
      <Link to="/blog">Blog</Link>

      <button onClick={() => handleScroll(contactRef)}>Contact</button>
    </nav>
  );
}
