/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Flexbox from '../Flexbox';
import Image from '../Image';
import Word from '../Word';

export default ({ index, lineSection }) =>
  <Flexbox direction='column'>
    <Image height={lineSection.height} position={lineSection.position} />
    <Flexbox direction='row' wrap="nowrap">
      {lineSection.words && lineSection.words.map(word => <Word lineSection={lineSection} wordSection={word} />)}
    </Flexbox>
  </Flexbox>
