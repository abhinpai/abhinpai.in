import React from 'react';
import WaveImage from '../../assets/wave.svg';

function Message() {
  return (
    <div className='message'>
      <p className='message__welcome'>
        Namaste{' '}
        <span>
          <img height='36px' src={WaveImage} alt='Wave' loading='lazy' />
        </span>{' '}
        I’m Abhin Pai,{' '}
      </p>{' '}
      <br />
      <p>a self-taught full-stack developer</p>
      <p>Who enjoys buildings stuff that lives on the internet</p>
    </div>
  );
}

export default Message;
