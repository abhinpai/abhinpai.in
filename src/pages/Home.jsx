import React from 'react';
import Hero from '../components/atoms/Hero';
import Message from '../components/molecues/Message';
import '../scss/pages/_home.scss';
import HeroImage from '../assets/hero.svg';
import useData from '../state/dataLayer';
import '../components/atoms/ThemeSwitch';
import ThemeSwitch from '../components/atoms/ThemeSwitch';
import Description from '../components/atoms/Description';
import Connect from '../components/molecues/Connect';
import Ribbon from '../components/atoms/Ribbon';
import PlaceHolder from '../components/atoms/PlaceHolder';
import ExperienceCard from '../components/molecues/ExperienceCard';
import Project from '../components/molecues/Project';
import Projects from '../data/projets.json';

const skills = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];

function Home() {
  const [{ isDarkThemeEnabled }, dispatch] = useData();

  const getThemeClass = () => {
    const body = document.getElementById('grandMaster');
    if (isDarkThemeEnabled) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  };

  return (
    <main className={getThemeClass()}>
      <ThemeSwitch />
      <div className='home'>
        <section className='section__intro'>
          <div className='section__intro__banner'>
            <Message />
            <Hero image={HeroImage} alt='Hero' />
          </div>
          <Description />
        </section>

        <section className='section__details'>
          <div className='left'>
            <Connect />
          </div>
          <div className='right'>
            <div className='right__skills section__item'>
              <Ribbon heading='I’m goot at' />
              <div className='right__skills-list'>
                {skills.map((_, index) => (
                  <PlaceHolder key={index} />
                ))}
              </div>
            </div>
            <div className='right__experience section__item'>
              <Ribbon heading='Work Experience' />
              <div className='right__experience-list'>
                <ExperienceCard
                  company='Honeywell Connected Enterprises'
                  designation='Software Engineer I'
                  timeline='July 2018 - Present'
                />
                <ExperienceCard
                  company='Think201'
                  designation='Mobile Application Developer Intern'
                  timeline='Jan 2018 - May 2018'
                />
              </div>
            </div>
            <div className='right-projects section__item'>
              <Ribbon heading='My works' />
              <div className='right-projects-list'>
                {Projects.map((project, index) => (
                  <Project
                    key={index}
                    link={project.link}
                    title={project.title}
                    description={project.description}
                    techs={project.stack}
                  />
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
