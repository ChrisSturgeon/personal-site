import './About.css';
import React from 'react';

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="about">
      <div className="left">Left</div>
      <div className="right">Right</div>
    </div>
  );
}
