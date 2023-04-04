import './Card.css';
import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export default function Card({ info }) {
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <h3>{info.name}</h3>
      <img
        src={info.screenshot}
        alt={info.altText}
        style={{ maxWidth: '100%', objectFit: 'cover' }}
      ></img>
      <div className="content">
        <p> {info.about}</p>
        <p>Challenges overcome include:</p>
        {info.challenges && (
          <ul>
            {info.challenges.map((challenge) => {
              return <li>{challenge}</li>;
            })}
          </ul>
        )}
      </div>
      <div className="links">
        <motion.a
          href={info.live}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            position: 'relative',
            scale: 1.1,
          }}
        >
          View Live
        </motion.a>
        <motion.a
          href={info.repo}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            position: 'relative',
            scale: 1.1,
          }}
        >
          View Code
        </motion.a>
      </div>
    </motion.div>
  );
}
