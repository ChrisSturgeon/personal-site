import React, { useState, useEffect } from 'react';
import './MobileSidebar.css';
import { Link } from 'react-router-dom';

export default function MobileSidebar({ navOpen, toggleNav }) {
  const [test, setTest] = useState(false);

  useEffect(() => {}, [test]);
  return (
    <div className={navOpen ? 'mobile-sidebar out' : 'mobile-sidebar'}>
      <p>I'm the mobile sidebar</p>
      <ul>
        <li>
          <Link to="/blog/" onClick={() => toggleNav()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog/posts/all" onClick={() => toggleNav()}>
            All Posts
          </Link>
        </li>
      </ul>
    </div>
  );
}
