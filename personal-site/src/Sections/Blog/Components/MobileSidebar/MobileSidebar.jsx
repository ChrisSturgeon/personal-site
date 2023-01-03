import React, { useState, useEffect } from 'react';
import './MobileSidebar.css';
import { Link } from 'react-router-dom';

export default function MobileSidebar({ navOpen, toggleNav }) {
  const [test, setTest] = useState(false);

  useEffect(() => {}, [test]);
  return (
    <nav className={navOpen ? 'mobile-sidebar out' : 'mobile-sidebar'}>
      <div className="upper">
        <ul>
          <li>
            <Link to="/blog/posts/recent"onClick={() => toggleNav()}>Recent Posts</Link>
          </li>
          <li>
            <Link to="/blog/posts/all" onClick={() => toggleNav()}>
              All Posts
            </Link>
          </li>
          <li>
            <Link to="/blog/" onClick={() => toggleNav()}>
              Blog Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => toggleNav()}>
              Site Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-footer">
        <h3>Contact</h3>
        <ul className="contact-types">
          <li>
            <a href="mailto: sturgeon.chris@gmail.com">email</a>
          </li>
          <li>
            <a
              href="https://github.com/ChrisSturgeon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chris-sturgeon-36a74254/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ChrisSturge0n"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
