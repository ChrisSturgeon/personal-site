import './Contact.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="contact">
      <h2>Contact</h2>
      <ul className="contact-types">
        <motion.li
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          <a href="mailto: sturgeon.chris@gmail.com">
            sturgeon.chris@gmail.com
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          <a
            href="https://github.com/ChrisSturgeon"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          <a
            href="https://www.linkedin.com/in/chris-sturgeon-36a74254/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            position: 'relative',
            x: '20px',
          }}
        >
          <a
            href="https://twitter.com/ChrisSturge0n"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </motion.li>
      </ul>
    </div>
  );
}
