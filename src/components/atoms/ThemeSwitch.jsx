import React, { useEffect, useState } from 'react';
import { ActionToggleTheme } from '../../state/actionCreator';
import useData from '../../state/dataLayer';
import DarkBulbIcon from '../../assets/dark-bulb.svg';
import LightBulbIcon from '../../assets/light-bulb.svg';
import { THEME_KEY } from '../../utils/constants';
import { stringToBoolean } from '../../utils/helper';

function ThemeSwitch() {
  const [{ isDarkThemeEnabled }, dispatch] = useData();
  const [currentTheme, setCurrentTheme] = useState(
    stringToBoolean(localStorage.getItem(THEME_KEY))
  );

  useEffect(() => {
    const body = document.getElementById('grandMaster');
    if (currentTheme) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }, [currentTheme]);

  const swithTheme = () => {
    console.log('Before', currentTheme);
    const theme = !isDarkThemeEnabled;
    localStorage.setItem(THEME_KEY, theme);
    setCurrentTheme(stringToBoolean(theme));
    console.log('After', currentTheme);
    ActionToggleTheme(dispatch, theme);
  };

  return (
    <div onClick={swithTheme} className='switch'>
      <img
        height='12px'
        src={currentTheme ? DarkBulbIcon : LightBulbIcon}
        alt='Theme bulb'
      />
    </div>
  );
}

export default ThemeSwitch;
