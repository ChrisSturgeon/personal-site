import './App.css';
import { useState, useEffect, useRef } from 'react';
import { useScroll, AnimatePresence } from 'framer-motion';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import MobileNav from './Components/MobileNav/MobileNav';

const getIsMobile = () => window.innerWidth <= 768;

function App() {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [showNav, setShowNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const { scrollY } = useScroll();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleScroll = (ref) => {
    if (mobileNav) {
      setMobileNav(false);
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) {
      setTimeout(() => {
        setShowNav(false);
        console.log('stopped');
      }, 800);
    }
  };

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

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

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
    <div className="App">
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

export default App;
