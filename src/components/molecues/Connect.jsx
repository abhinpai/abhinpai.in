import React from 'react';

function Connect() {
  return (
    <div className='connect'>
      <div>
        <p className='connect__site'>github.com /</p>
      </div>
      <div>
        <h3>Abhin Pai</h3>
        <h3 className="connect__designation">Full-stack Developer</h3>
        <p className='connect__handler'>
          @abhinpai <span className='connect__provider'>#</span>{' '}
          <span className='connect__provider'>#</span>{' '}
          <span className='connect__provider'>#</span>
        </p>
      </div>
    </div>
  );
}

export default Connect;
