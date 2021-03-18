import React from 'react';
import Ribbon from '../atoms/Ribbon';
import ProjectCard from './ProjectCard';
import ProjectData from '../../data/projets.json';

function Projects() {
  return (
    <div className='details__right__projets'>
      <Ribbon heading='My works' />
      <div className='details__right__projets-list'>
        {ProjectData.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link}
            title={project.title}
            description={project.description}
            techs={project.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
