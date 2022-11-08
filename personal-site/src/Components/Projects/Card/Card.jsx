import './Card.css';

import React from 'react';

import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
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
      <div className="content">
        <div className="left">
          <img
            src={info.screenshot}
            alt={info.altText}
            style={{ maxWidth: '100%', objectFit: 'cover' }}
          ></img>
        </div>
        <div className="right">
          <p> {info.about}</p>
          <div className="links">
            <a href={info.live} target="_blank" rel="noreferrer">
              View live
            </a>
            <a href={info.repo} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
