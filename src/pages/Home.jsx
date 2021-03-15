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
import Connect from '../components/molecues/Connect';
import Ribbon from '../components/atoms/Ribbon';
import PlaceHolder from '../components/atoms/PlaceHolder';

const skills = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];

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

        <section className='home__section'>
          <Connect />
          <div>
            <div className='home__section__skills'>
              <Ribbon heading='I’m goot at' />
              <div className='home__section__skills-list'>
              {skills.map((item, index) => (
                <PlaceHolder key={index} />
              ))}
                </div>
             
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
