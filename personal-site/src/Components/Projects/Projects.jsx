import './Projects.css';
import React from 'react';
import { projectData } from '../../projects';
import Card from './Card/Card';

export default function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="projects">
      <h2>Projects</h2>
      {projectData.map((project) => {
        return <Card info={project} key={project.name} />;
      })}
    </div>
  );
}
