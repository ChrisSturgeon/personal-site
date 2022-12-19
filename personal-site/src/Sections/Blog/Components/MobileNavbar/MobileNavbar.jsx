import React from 'react';
import './MobileNavbar.css';
import { Link } from 'react-router-dom';

export default function MobileNavbar({ toggleNav }) {
  return (
    <nav className="mobile-navbar">
      <Link to="/">Chris Sturgeon</Link>
      <button onClick={() => toggleNav()}>Open</button>
    </nav>
  );
}
