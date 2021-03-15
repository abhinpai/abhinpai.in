import React from 'react';

function ExperienceCard({ company, designation, timeline }) {
  return (
    <div className='experienceCard'>
      <p className='experienceCard__company'>{company}</p>
      <p className='experienceCard__designation'>{designation}</p>
      <p className='experienceCard__timeline'>{timeline}</p>
    </div>
  );
}

export default ExperienceCard;
