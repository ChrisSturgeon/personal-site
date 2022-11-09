import './Contact.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="contact">
      <h2>Contact</h2>
      <ul className="contact-types">
        <motion.a
          href="mailto: sturgeon.chris@gmail.com"
          whileHover={{
            position: 'relative',
            x: '30px',
          }}
        >
          sturgeon.chris@gmail.com
        </motion.a>
        <motion.a
          href="https://github.com/ChrisSturgeon"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          Github
        </motion.a>
        <motion.a
          href="https://twitter.com/ChrisSturge0n"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          Twitter
        </motion.a>
      </ul>
    </div>
  );
}
