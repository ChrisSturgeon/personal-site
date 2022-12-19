import React from 'react-router-dom';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './BlogIndex.css';

import useCheckMobileScreen from './Hooks/useWindowDimensions';

// Component imports
import Sidebar from './Components/Sidebar/Sidebar';
import MobileSidebar from './Components/MobileSidebar/MobileSidebar';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Summaries from './Components/Summaries/Summaries';
import Post from './Components/Post/Post';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';

export default function BlogIndex() {
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useCheckMobileScreen();

  // Toggles mobile side navbar open/closed
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="column-wrapper">
      {isMobile ? (
        <>
          <MobileNavbar toggleNav={toggleNav} />
          <MobileSidebar navOpen={navOpen} toggleNav={toggleNav} />
        </>
      ) : (
        <Sidebar />
      )}

      <Outlet />

      <Routes>
        <Route index element={<Home isMobile={isMobile} />} />
        <Route path="/posts/all" element={<Summaries />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}
