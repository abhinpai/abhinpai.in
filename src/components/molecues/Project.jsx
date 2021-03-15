import React from 'react';
import Pill from '../atoms/Pill';
import LinkIcon from '../../assets/link.svg';

function Project({ title, description, techs, link }) {
  return (
    <div className='project'>
      <h3 className='project__title'>
        {title}{' '}
        {link && (
          <span>
            <a className="link" href={link} target='_blank' rel='noopener noreferrer'>
              <img src={LinkIcon} alt='link' />
            </a>
          </span>
        )}{' '}
      </h3>
      <p className='project__desc'> {description}</p>
      <div className='project__tech'>
        {techs.map((tech, index) => (
          <Pill content={tech} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Project;
