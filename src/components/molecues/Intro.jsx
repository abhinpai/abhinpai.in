import React from 'react';
import HeroImage from '../../assets/hero-2.svg';
import Description from '../atoms/Description';
import Hero from '../atoms/Hero';
import Message from './Message';

function Intro() {
  return (
    <section className='intro'>
      <div className='intro__heading'>
        <Message />
        <Hero image={HeroImage} alt='Hero' />
      </div>
      <Description className='intro__desc' />
    </section>
  );
}

export default Intro;
