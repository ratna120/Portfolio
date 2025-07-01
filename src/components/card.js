// src/components/ProjectCard.js
import React from 'react';

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Used:</strong> {tech}</p>
      <a href={github} target="_blank">GitHub</a> | <a href={live} target="_blank">Live Demo</a>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '1rem',
  marginBottom: '1rem',
};

export default ProjectCard;
