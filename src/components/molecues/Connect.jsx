import React, { useState } from 'react';
import GithubIcon from '../../assets/github.svg';
import GithubDarkIcon from '../../assets/github-dark.svg';
import TwitterIcon from '../../assets/twitter.svg';
import TwitterDarkIcon from '../../assets/twitter-dark.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import LinkedInDarkIcon from '../../assets/linkedin-dark.svg';
import useData from '../../state/dataLayer';
import ConnectData from '../../data/connect.json';

function Connect() {
  const [{ isDarkThemeEnabled }] = useData();
  const [siteStyle, setSiteStyle] = useState({
    class: 'connect__site',
    name: '',
  });

  const mouseEnter = (site, url) => {
    switch (site) {
      case 'Github':
        setSiteStyle({ class: 'connect__site-active', name: url });
        break;
      case 'Twitter':
        setSiteStyle({ class: 'connect__site-active', name: url });
        break;
      case 'LinkedIn':
        setSiteStyle({ class: 'connect__site-active', name: url });
        break;
      default:
        setSiteStyle({ class: 'connect__site', name: '' });
        break;
    }
  };

  const getIcon = (siteName) => {
    switch (siteName) {
      case 'Github':
        return isDarkThemeEnabled ? GithubDarkIcon : GithubIcon;
      case 'Twitter':
        return isDarkThemeEnabled ? TwitterDarkIcon : TwitterIcon;
      case 'LinkedIn':
        return isDarkThemeEnabled ? LinkedInDarkIcon : LinkedInIcon;
    }
  };

  return (
    <div className='connect'>
      <div className='connect__left'>
        <p className={siteStyle.class}>{siteStyle.name}</p>
      </div>
      <div>
        <h3>Abhin Pai</h3>
        <h3 className='connect__designation'>Full-stack Developer</h3>
        <p className='connect__handler'>
          @abhinpai{' '}
          {ConnectData.map((item, index) => {
            return (
             <a style={{display: 'flex'}} key={index} href={item.link} target='_blank' rel='noopener noreferrer'>
                <img
                loading="lazy"
                onMouseEnter={() => mouseEnter(item.siteName, item.url)}
                onMouseLeave={() =>
                  setSiteStyle({ class: 'connect__site', name: '' })
                }
                className='connect__provider'
                height={item.size}
                src={getIcon(item.siteName)}
                alt={item.siteName}
              />
             </a>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Connect;
