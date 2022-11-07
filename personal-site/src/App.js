import './App.css';
import { useState, useEffect } from 'react';
import { useScroll, AnimatePresence } from 'framer-motion';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [showNav, setShowNav] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log('Page scroll: ', latest);
      if (latest > 20) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [scrollY]);
  return (
    <div className="App">
      <AnimatePresence>
        {showNav && <NavBar showNav={showNav} />}
      </AnimatePresence>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
