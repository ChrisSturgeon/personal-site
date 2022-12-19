import React, { useState, useEffect } from 'react';
import useCheckMobileScreen from '../../Hooks/useWindowDimensions';
import './Home.css';

export default function Home({ isMobile }) {
  // const [isMobile, setIsMobile] = useCheckMobileScreen();
  return (
    <div className="home-wrapper">
      <div>
        <p>{isMobile ? 'I am mobile' : 'Im a big a boy'} home page</p>
      </div>
    </div>
  );
}
