import React from 'react';
import { Connect, Skills, Projects, Experiences } from './index';

function Details() {
  return (
    <section className='details'>
      <div className='details__left'>
        <Connect />
      </div>
      <div className='details__right'>
        <Skills />
        <Experiences />
        <Projects />
      </div>
    </section>
  );
}

export default Details;
