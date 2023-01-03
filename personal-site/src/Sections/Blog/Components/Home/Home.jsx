import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import headShot from '../../../../imgs/headshot-modified.png';

export default function Home({ isMobile }) {
  // Scrolls to top of page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div>
          <h1>Hello!</h1>
          <p>
            Welcome to my blog. My aim is to write about all things related to
            coding. Posts could be JavaScript specific, general programming
            concepts, career development, or anything else that happens to pop
            into my brain.
          </p>
          <p>
            Check out the most{' '}
            <Link to="/blog/posts/recent">recent posts.</Link>{' '}
          </p>
        </div>

        <div className="img-box">
          <img
            src={headShot}
            alt="Chris Sturgeon headshot"
            // style={{ width: '200px' }}
            className="headShot"
          ></img>
        </div>
      </div>
    </div>
  );
}
