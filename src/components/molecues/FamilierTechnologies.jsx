import React from 'react';
import {
  DockerIcon,
  DocusaurusIcon,
  FirebaseIcon,
  FlutterIcon,
  GraphQLIcon,
  ReduxIcon,
  TsIcon,
  WebPackIcon,
} from '../../assets/tech-icons';
import Ribbon from '../atoms/Ribbon';

const techs = [
  {
    icon: ReduxIcon,
  },
  {
    icon: FlutterIcon,
  },
  {
    icon: TsIcon,
  },
  {
    icon: DocusaurusIcon,
  },
  {
    icon: FirebaseIcon,
  },
  {
    icon: GraphQLIcon,
  },
  {
    icon: DockerIcon,
  },
  {
    icon: WebPackIcon,
  },
];

function FamilierTechnologies() {
  return (
    <div className='details__right__techs'>
      <Ribbon heading='Familiar Technologies ' />
      <div className='details__right__techs-list'>
        {techs.map((item, index) => (
          <img src={item.icon} key={index} alt='index' loading='lazy' />
        ))}
      </div>
    </div>
  );
}

export default FamilierTechnologies;
