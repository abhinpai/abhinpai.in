import React from 'react';
import { ActionToggleTheme } from '../../state/actionCreator';
import useData from '../../state/dataLayer';

function ThemeSwitch() {
  const [{ isDarkThemeEnabled }, dispatch] = useData();

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
