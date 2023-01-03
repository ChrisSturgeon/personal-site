import React from 'react';
import { motion } from 'framer-motion';
import { Link, redirect } from 'react-router-dom';
import './Sidebar.css';
import Contact from '../../../Home/Components/Contact/Contact';

// Framer obj to shift link to right on hover
const hoverShift = {
  position: 'relative',
  x: '10px',
};

export default function Sidebar(props) {
  return (
    <nav className="sidebar">
      <div className="upper">
        <Link to="/blog/" className="logo">
          Chris Sturgeon
        </Link>
        <ul>
          <motion.li whileHover={hoverShift}>
            <Link to="/blog/posts/recent">Recent Posts</Link>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <Link to="/blog/posts/all">All Posts</Link>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <Link to="/blog/">Blog Home</Link>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <Link to="/">Site Home</Link>
          </motion.li>
        </ul>
      </div>
      <div className="footer">
        <h3>Contact</h3>
        <ul className="contact-types">
          <motion.li whileHover={hoverShift}>
            <motion.a href="mailto: sturgeon.chris@gmail.com">
              sturgeon.chris@gmail.com
            </motion.a>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <a
              href="https://github.com/ChrisSturgeon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <a
              href="https://www.linkedin.com/in/chris-sturgeon-36a74254/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </motion.li>
          <motion.li whileHover={hoverShift}>
            <a
              href="https://twitter.com/ChrisSturge0n"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}
