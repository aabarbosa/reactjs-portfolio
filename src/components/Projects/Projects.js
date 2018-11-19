import React from 'react';
import './Projects.scss';
import Project from '../Project/Project';
import projectInfo from '../../assets/documents/projects'

const Projects = (props) => {

  const quicklinks = projectInfo.map(quicklink => {
    return (
      <div className="quicklink"><a href={quicklink.link} target="_blank" rel="noopener noreferrer">{quicklink.title}<i className="icon-link-ext"></i></a></div>
    );
  });

  return (
    <div className="Projects">
      <div className="quicklinks">
        <h2>Quick Links: </h2>
        {quicklinks}
      </div>
      {projectInfo.map( (project, index) => <Project key={`project${index}`} {...project} /> )}
    </div>
  );
};

export default Projects;