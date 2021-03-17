import React from 'react';
import '../components/atoms/ThemeSwitch';
import Intro from '../components/molecues/Intro';
import Details from '../components/molecues/Details';

function Home() {
  return (
    <main className='parent'>
      <div className='parent__intro'>
        <Intro />
      </div>
      <div className='parent__details'>
        <Details />
      </div>
    </main>
  );
}

export default Home;
