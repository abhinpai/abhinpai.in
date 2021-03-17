import React from 'react';
import '../components/atoms/ThemeSwitch';
import { Intro, Details, MotionBox } from '../components/index';

function Home() {
  return (
    <MotionBox className='parent'>
      <div className='parent__intro'>
        <Intro />
      </div>
      <div className='parent__details'>
        <Details />
      </div>
    </MotionBox>
  );
}

export default Home;
