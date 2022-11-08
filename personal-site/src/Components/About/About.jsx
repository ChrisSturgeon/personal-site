import './About.css';
import React from 'react';

import headShot from '../../imgs/headshot-modified.png';

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="about">
      <div
        className="left"
        // style={{ backgroundImage: `url(${headShot})`, backgroundSize: 'cover' }}
      >
        <img src={headShot} style={{ width: '400px' }}></img>
      </div>
      <div className="right">
        <p className="bio">
          It had been her dream for years but Dana had failed to take any action
          toward making it come true. There had always been a good excuse to
          delay or prioritize another project. As she woke, she realized she was
          once again at a crossroads. Would it be another excuse or would she
          finally find the courage to pursue her dream? Dana rose and took her
          first step.
        </p>
        <ul className="skills">
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    </div>
  );
}
