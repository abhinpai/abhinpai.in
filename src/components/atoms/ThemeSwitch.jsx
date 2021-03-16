import React, { useEffect } from 'react';
import { ActionToggleTheme } from '../../state/actionCreator';
import useData from '../../state/dataLayer';

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
    <div className='switch__container'>
      <input
        defaultChecked={isDarkThemeEnabled}
        onClick={(e) => ActionToggleTheme(dispatch, !isDarkThemeEnabled)}
        id='switch-shadow'
        className='switch switch--shadow'
        type='checkbox'
      ></input>
      <label htmlFor='switch-shadow'></label>
    </div>
  );
}

export default ThemeSwitch;
