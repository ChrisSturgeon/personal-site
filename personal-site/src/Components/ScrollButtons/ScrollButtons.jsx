import React from 'react';

export default function ScrollButtons({
  handleScroll,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <ul>
      <li>
        <button onClick={() => handleScroll(aboutRef)}>About</button>
      </li>
      <li>
        <button onClick={() => handleScroll(projectsRef)}>Projects</button>
      </li>
      <li>
        <button onClick={() => handleScroll(contactRef)}>Contact</button>
      </li>
    </ul>
  );
}
