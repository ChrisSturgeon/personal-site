import './ScrollButtons.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function ScrollButtons({
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <ul className="scroll-btns">
      <li>
        <button className="about-btn" onClick={() => handleScroll(aboutRef)}>
          About
        </button>
      </li>
      <li>
        <button onClick={() => handleScroll(projectsRef)}>Projects</button>
      </li>
      <li>
        <Link
          className="blog-link-navbar"
          to="/blog/"
          onClick={() => {
            // TO DO - improve this dirty hack
            // Removes scroll lock and goes to top of screen
            window.scrollTo(0, 0);
            document.body.style.overflowY = 'auto';
          }}
        >
          Blog
        </Link>
      </li>

      <li>
        <button onClick={() => handleScroll(contactRef)}>Contact</button>
      </li>
    </ul>
  );
}
