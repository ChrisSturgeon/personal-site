import React from 'react';

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
      <h2
        onClick={() => {
          window.scroll({ top: 0, behavior: 'smooth' });
        }}
      >
        Chris Sturgeon
      </h2>

      {!isMobile && (
        <ScrollButtons
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}

      {isMobile && (
        <button onClick={toggleMobileNav}>
          {mobileNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-bars"></i>
          )}
        </button>
      )}
    </motion.nav>
  );
}
