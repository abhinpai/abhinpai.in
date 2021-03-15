import React from 'react';
import Hero from '../components/atoms/Hero';
import Message from '../components/molecues/Message';
import '../scss/pages/_home.scss';
import HeroImage from '../assets/hero.svg';
import useData from '../state/dataLayer';
import { ActionToggleTheme } from '../state/actionCreator';
import '../components/atoms/ThemeSwitch';
import ThemeSwitch from '../components/atoms/ThemeSwitch';
import Description from '../components/atoms/Description';

function Home() {
  const [{ isDarkThemeEnabled }, dispatch] = useData();

  const getThemeClass = () => {
    const body = document.getElementById('grandMaster');
    isDarkThemeEnabled
      ? body.classList.add('dark-theme')
      : body.classList.remove('dark-theme');
  };

  return (
    <main className={getThemeClass()}>
      <ThemeSwitch />
      <div className='home'>
        <div className='home__banner'>
          <div />
          <Message />
          <Hero image={HeroImage} alt='Hero' />
        </div>
        <Description />
      </div>
    </main>
  );
}

export default Home;
