import React from 'react';
import PlaceHolder from '../atoms/PlaceHolder';
import Ribbon from '../atoms/Ribbon';

const skills = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];

function Skills() {
  return (
    <div className='details__right__skills'>
      <Ribbon heading='I’m goot at' />
      <div className='details__right__skills-list'>
        {skills.map((_, index) => (
          <PlaceHolder key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
