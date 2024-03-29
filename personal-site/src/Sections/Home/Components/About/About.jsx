import './About.css';
import React from 'react';
import headShot from '../../../../imgs/headshot-modified.png';

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="about">
      <div className="left">
        <img
          src={headShot}
          alt="Chris Sturgeon headshot"
          style={{ width: '400px' }}
        ></img>
      </div>
      <div className="right">
        <p className="bio">
          Hi! I'm Chris, a front end web developer based in the south east of
          England. My journey to web development started when I discovered that
          building some basic CRUD sites with Django scratched my creative itch.
          I subsequently launched myself head-first into Vanilla JavaScript
          before moving on to React and Express. I enjoy learning new frameworks
          and tools, and am currently focusing on learning TypeScript along with
          accessibility and testing best practices.
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
              <li>Express</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="tools">
            <h3>Development & Tools</h3>
            <ul className="skills">
              <li>Webpack</li>
              <li>Framer</li>
              <li>npm</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>Jest</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
