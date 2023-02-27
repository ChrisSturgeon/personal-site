import './Card.css';
import { motion } from 'framer-motion';
import React from 'react';

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
            <motion.li
              whileHover={{
                position: 'relative',
                scale: 1.1,
              }}
            >
              <motion.a href={info.live} target="_blank" rel="noreferrer">
                View Live
              </motion.a>
            </motion.li>
            <motion.li
              whileHover={{
                position: 'relative',
                scale: 1.1,
              }}
            >
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
            </motion.li>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
