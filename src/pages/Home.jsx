import React from 'react';
import Hero from '../components/atoms/Hero';
import Message from '../components/molecues/Message';
import '../scss/pages/_home.scss';
import HeroImage from '../assets/hero.svg'

function Home() {
  return (
    <main className='home'>
      <div className='home__banner'>
        <Message />
        <Hero image={HeroImage} alt="Hero"/>
      </div>
    </main>
  );
}

export default Home;
