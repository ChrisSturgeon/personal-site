import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import './NavBar.css';

import ScrollButtons from '../ScrollButtons/ScrollButtons';

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

export default function NavBar({
  isMobile,
  mobileNav,
  toggleMobileNav,
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <motion.nav
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="top-nav"
    >
      <h2>Chris Sturgeon</h2>

      {!isMobile && (
        <ScrollButtons
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}

      {isMobile && <button onClick={toggleMobileNav}>Expand</button>}
    </motion.nav>
  );
}
