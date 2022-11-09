import './MobileNav.css';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollButtons from '../ScrollButtons/ScrollButtons';

const slideOut = {
  hidden: {
    x: '200vw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: '200vw',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export default function MobileNav({
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <motion.div
      variants={slideOut}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="mobile-nav"
    >
      <div className="mobile-scroll-buttons">
        <ScrollButtons
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </div>
    </motion.div>
  );
}
