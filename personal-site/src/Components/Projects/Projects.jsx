import React from 'react';
import './Projects.css';

export default function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="projects">
      I'm the projects section
    </div>
  );
}
