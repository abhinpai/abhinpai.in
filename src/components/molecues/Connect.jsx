import React from 'react';
import GithubIcon from '../../assets/github.svg';
import GithubDarkIcon from '../../assets/github-dark.svg';
import TwitterIcon from '../../assets/twitter.svg';
import TwitterDarkIcon from '../../assets/twitter-dark.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import LinkedInDarkIcon from '../../assets/linkedin-dark.svg';
import useData from '../../state/dataLayer';

function Connect() {
  const [{ isDarkThemeEnabled }] = useData();
  return (
    <div className='connect'>
      <div>
        <p className='connect__site'>github.com /</p>
      </div>
      <div>
        <h3>Abhin Pai</h3>
        <h3 className='connect__designation'>Full-stack Developer</h3>
        <p className='connect__handler'>
          @abhinpai{' '}
          <img
            className='connect__provider'
            height='18px'
            src={isDarkThemeEnabled ? GithubDarkIcon : GithubIcon}
            alt='Github'
          />
          <img
            className='connect__provider'
            height='14px'
            src={isDarkThemeEnabled ? LinkedInDarkIcon : LinkedInIcon}
            alt='Linkedin'
          />
          <img
            className='connect__provider'
            height='14px'
            src={isDarkThemeEnabled ? TwitterDarkIcon : TwitterIcon}
            alt='Twitter'
          />
        </p>
      </div>
    </div>
  );
}

export default Connect;
