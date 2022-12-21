import React from 'react';
import './MobileNavbar.css';
import { Link } from 'react-router-dom';

export default function MobileNavbar({ navOpen, toggleNav }) {
  return (
    <nav className="mobile-navbar">
      <Link to="/blog">Chris Sturgeon</Link>
      {/* <button onClick={() => toggleNav()}>Open</button> */}
      <button onClick={toggleNav}>
        {navOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-sharp fa-solid fa-bars"></i>
        )}
      </button>
    </nav>
  );
}
