import React from 'react';

function Hero({ image, alt, width, height }) {
  return (
    <img
      className='hero'
      width={width}
      height={height}
      src={image}
      alt={alt}
      loading='lazy'
    />
  );
}

export default Hero;
