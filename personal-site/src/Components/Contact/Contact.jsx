import './Contact.css';
import React from 'react';

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="contact">
      I'm the contact section
    </div>
  );
}
