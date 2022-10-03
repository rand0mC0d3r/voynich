/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import manuscript from '../../images.jpeg';

const _width = 426
const multiplier= 2

export default ({ grayscale = false, hGuides, start = 0, width, height, position }) => <>
  <div style={{
    position: 'relative',
    backgroundImage: `url(${manuscript})`,
    filter: grayscale ? 'grayscale(1)' : 'none',
    width: `${(width || _width) * multiplier}px`,
    backgroundSize: `${_width * multiplier}px`,
    height: `${height * multiplier}px`,
    backgroundPosition: `${start * multiplier}px ${position * multiplier}px`,
  }}>
    {hGuides && hGuides.map(hGuide => <div
      style={{
        border: '1px dotted black',
        top: `${hGuide}px`,
        position: 'absolute',
        width: '100%'
      }}
      key={hGuide}
    />)}
  </div>
</>
