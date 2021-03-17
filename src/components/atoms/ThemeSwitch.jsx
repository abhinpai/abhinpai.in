import React, { useEffect } from 'react';
import { ActionToggleTheme } from '../../state/actionCreator';
import useData from '../../state/dataLayer';
import DarkBulbIcon from '../../assets/dark-bulb.svg';
import LightBulbIcon from '../../assets/light-bulb.svg';

function ThemeSwitch() {
  const [{ isDarkThemeEnabled }, dispatch] = useData();

  useEffect(() => {
    const body = document.getElementById('grandMaster');
    if (isDarkThemeEnabled) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }, [isDarkThemeEnabled]);

  return (
    <div
      onClick={(e) => ActionToggleTheme(dispatch, !isDarkThemeEnabled)}
      className='switch'
    >
      <img
        height='12px'
        src={isDarkThemeEnabled ? DarkBulbIcon : LightBulbIcon}
        alt='Theme bulb'
      />
    </div>
  );
}

export default ThemeSwitch;
