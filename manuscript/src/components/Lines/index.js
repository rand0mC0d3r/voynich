/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Flexbox from '../Flexbox';
import Line from '../Line';

export default () => {
  const [lineSections, setLineSections] = useState([
    {
      height: 24,
      position: -7,
      words: [
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
        {
          text: 'The',
          position: 0,
          width: 24,
        },
      ]
    },
    {
      height: 21,
      position: -28
    },
    {
      height: 22,
      position: -46
    },
    {
      height: 22,
      position: -66
    },
    {
      height: 24,
      position: -85
    },
  ]);

  return <div>
    <Flexbox direction='column' gap="medium">
      {lineSections.map((lineSection, index) => <Line key={index} index={index} lineSection={lineSection} />)}
    </Flexbox>
  </div>
}
