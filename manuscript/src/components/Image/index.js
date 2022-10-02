/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import manuscript from '../../images.jpeg';

const width = 426
const multiplier= 2

export default ({ height, position }) =>
      <div style={{
        backgroundImage: `url(${manuscript})`,
        width: `${width * multiplier}px`,
        backgroundSize: `${width * multiplier}px`,
        height: `${height * multiplier}px`,
        backgroundPosition: `0px ${position * multiplier}px`,
      }} />
