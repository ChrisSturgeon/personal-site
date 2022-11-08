import React from 'react';
import './Projects.css';
import { motion, Variants } from 'framer-motion';
import Card from './Card/Card';
import { projectData } from '../../projects';

// const cardVariants = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 50,
//     transition: {
//       type: 'spring',
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

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
