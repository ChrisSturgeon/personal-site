import React from 'react';
import { motion } from 'framer-motion';
import './NavBar.css';

const dropIn = {
  hidden: {
    y: '-10vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: '-10vh',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function NavBar({ showNav }) {
  return (
    <motion.nav
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="top-nav"
    >
      I'm the navbar
    </motion.nav>
  );
}
