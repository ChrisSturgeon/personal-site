import './Hero.css';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroNav from '../HeroNav/HeroNav';

export default function Hero({
  isMobile,
  showArrow,
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <div className="hero">
      <div className="left">
        <h2>
          Chris
          <br /> Sturgeon
        </h2>

        <AnimatePresence>
          {showArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [20, 5, 20, 5],
                repeat: 'Infinity',
              }}
              exit={{ opacity: 0 }}
              className="down-arrow"
              onClick={() => {
                // Scrolls down hero height on click
                window.scroll({
                  top: document.querySelector('.hero').offsetHeight,
                  behavior: 'smooth',
                });
              }}
            >
              &#8595;
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!isMobile && (
        <HeroNav
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}
    </div>
  );
}
