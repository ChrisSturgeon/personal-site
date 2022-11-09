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
        <img
          src={headShot}
          alt="Chris Sturgeon headshot"
          style={{ width: '400px' }}
        ></img>
      </div>
      <div className="right">
        <p className="bio">
          Hi! I'm Chris, a front end web developer based in the south east of
          England. My journey to web development started upon discovering that
          building some simple CRUD sites with Django scratched my creative
          itch. I subsequently launched myself head-first into JavaScript and
          then React. I enjoy learning new frameworks and tools, and am
          currently exploring Express and Mongo DB to broaden my understanding
          across the stack.
        </p>
        <p className="bio">
          Outside of web development I enjoy windsurfing, paddleboarding,
          running and hiking.
        </p>
        <div className="skills-lists">
          <div className="languages-frameworks">
            <h3>Languages & Frameworks</h3>
            <ul className="skills">
              <li>JavaScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Python</li>
              <li>Django</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="tools">
            <h3>Development & Tools</h3>
            <ul className="skills">
              <li>Webpack</li>
              <li>Framer</li>
              <li>Heroku</li>
              <li>npm</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
