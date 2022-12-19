import React, { useState, useEffect } from 'react';
import useCheckMobileScreen from '../../Hooks/useWindowDimensions';
import './Home.css';
import { Outlet } from 'react-router-dom';

export default function Home({ isMobile }) {
  // const [isMobile, setIsMobile] = useCheckMobileScreen();

  // Scrolls to top of page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-wrapper">
      <div>
        <p>{isMobile ? 'I am mobile' : 'Im a big a boy'} home page</p>
      </div>
    </div>
  );
}
