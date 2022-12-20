import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar(props) {
  return (
    <nav className="sidebar">
      <div className="upper">
        <Link className="logo">Chris Sturgeon</Link>
        <ul>
          <li>
            <Link>Recent Posts</Link>
          </li>
          <li>
            <Link to="/blog/posts/all">All Posts</Link>
          </li>
          <li>
            <Link to="/blog/">Blog Home</Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <Link>Github</Link>
      </div>
    </nav>
  );
}
