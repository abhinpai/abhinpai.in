import React from 'react';
import PlaceHolder from '../atoms/PlaceHolder';
import Ribbon from '../atoms/Ribbon';
import Connect from './Connect';
import ExperienceData from '../../data/experience.json';
import ExperienceCard from './ExperienceCard';
import Project from './Project';
import Projects from '../../data/projets.json';

const skills = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];

function Details() {
  return (
    <section className='details'>
      <div className='details__left'>
        <Connect />
      </div>
      <div className='details__right'>
        {/* Skills */}
        <div className='details__right__skills'>
          <Ribbon heading='I’m goot at' />
          <div className='details__right__skills-list'>
            {skills.map((_, index) => (
              <PlaceHolder key={index} />
            ))}
          </div>
          {/* Experience */}
          <div className='details__right__experience'>
            <Ribbon heading='Work Experience' />
            <div className='details__right__experience-list'>
              {ExperienceData.map((item, index) => (
                <ExperienceCard
                  company={item.company}
                  designation={item.designation}
                  timeline={item.timeline}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* Projects */}
          <div className='details__right__projets'>
            <Ribbon heading='My works' />
            <div className='details__right__projets-list'>
              {Projects.map((project, index) => (
                <Project
                  key={index}
                  link={project.link}
                  title={project.title}
                  description={project.description}
                  techs={project.stack}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
