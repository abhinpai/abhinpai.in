import React from 'react';
import Ribbon from '../atoms/Ribbon';
import ExperienceCard from './ExperienceCard';
import ExperienceData from '../../data/experience.json';

function Experiences() {
  return (
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
  );
}

export default Experiences;
