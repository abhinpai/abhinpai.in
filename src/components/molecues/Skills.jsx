import React from 'react';
import Ribbon from '../atoms/Ribbon';
import {
  ReactIcon,
  JsIcon,
  CssIcon,
  ScssIcon,
  MobxIcon,
  DotNetCoreIcon,
  Neo4jIcon,
  JestIcon,
} from '../../assets/tech-icons/index';

const skills = [
  {
    icon: ReactIcon,
  },
  {
    icon: JsIcon,
  },
  {
    icon: CssIcon,
  },
  {
    icon: ScssIcon,
  },
  {
    icon: DotNetCoreIcon,
  },
  {
    icon: Neo4jIcon,
  },
  {
    icon: MobxIcon,
  },
  {
    icon: JestIcon,
  },
];

function Skills() {
  return (
    <div className='details__right__skills'>
      <Ribbon heading='I’m good at' />
      <div className='details__right__skills-list'>
        {skills.map((item, index) => (
          <img
            src={item.icon}
            key={index}
            alt='index'
            loading='lazy'
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
