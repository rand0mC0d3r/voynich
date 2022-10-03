/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Flexbox from '../Flexbox';
import Image from '../Image';
import Word from '../Word';

export default ({ lineSection }) => {
  const { height, position, words } = lineSection;
  return <Flexbox direction='column' wrap="nowrap">
    <Image {...{grayscale: true, hGuides: [26], height, position }} />
    <Flexbox direction='row' wrap="nowrap" gap="large" justify='flex-start'>
      {words?.map(word => <Word key={`${word.text}_${word.width}_${word.start}`} {...{ lineSection, word }} />)}
    </Flexbox>
  </Flexbox>
}
