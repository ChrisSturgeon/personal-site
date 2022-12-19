import React from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useScroll, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import Hero from '../../Components/Hero/Hero';
import NavBar from '../../Components/NavBar/NavBar';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';
import MobileNav from '../../Components/MobileNav/MobileNav';

// import Blog from './Sections/Blog/BlogIndex';

// Returns true if user's screen width is less than 768px
const getIsMobile = () => window.innerWidth <= 768;

export default function Home() {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [showNav, setShowNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const { scrollY } = useScroll();

  // Toggles mobile nav menu open/close
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  // Scrolls tp given section refgerence, closing top navbar after if on mobile
  const handleScroll = (ref) => {
    if (mobileNav) {
      setMobileNav(false);
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) {
      setTimeout(() => {
        setShowNav(false);
      }, 800);
    }
  };

  // Displays bouncing down-arrow on mobile after 1 second of app mount
  useEffect(() => {
    const showArrow = () => {
      if (isMobile) {
        setShowArrow(true);
      }
    };
    setTimeout(showArrow, 1000);
  }, [isMobile]);

  // Locks body scroll when mobile nav is open
  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mobileNav]);

  // Runs on user screen re-size to initiate mobile layout if neccessary
  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Tracks scroll location to display top nav on desktop only
  // after user has scrolled past hero, or has scrolled at all on mobile
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (
        (isMobile && latest > 20) ||
        (!isMobile && latest > window.innerHeight)
      ) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setShowArrow(false);
    });
  }, [isMobile, scrollY]);

  return (
    <div className="home">
      <AnimatePresence>
        {showNav && (
          <NavBar
            isMobile={isMobile}
            showNav={showNav}
            mobileNav={mobileNav}
            toggleMobileNav={toggleMobileNav}
            handleScroll={handleScroll}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileNav && (
          <MobileNav
            handleScroll={handleScroll}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        )}
      </AnimatePresence>
      <Hero
        isMobile={isMobile}
        showArrow={showArrow}
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}
