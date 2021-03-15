import React from 'react';

function Hero({ image, alt, width, height }) {
  return (
    <div className="hero">
      <img width={width} height={height} src={image} alt={alt} loading='lazy' />
    </div>
  );
}

export default Hero;
