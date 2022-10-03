/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Flexbox from '../Flexbox';
import Line from '../Line';

const lineSections = [
    {
      height: 24,
      position: -7,
      words: [
        {
          text: 'fachys',
          start: -4,
          width: 50,
        },
        {
          text: 'ykal',
          start: -58,
          width: 31,
        },
        {
          text: 'ar',
          start: -92,
          width: 22,
        },
        {
          text: 'ataiin',
          start: -115,
          width: 46,
        },
        {
          text: 'Shol',
          start: -168,
          width: 35,
        },
        {
          text: 'Shory',
          start: -210,
          width: 41,
        },
        {
          text: 'cThres',
          start: -255,
          width: 52,
        },
        {
          text: 'ykor',
          start: -313,
          width: 36,
        },
        {
          text: 'Sholdy',
          start: -358,
          width: 50,
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
  ]

export default () => <Flexbox direction='column' gap="medium" wrap="nowrap">
    {lineSections.map(lineSection => <Line key={`${lineSection.height}_${lineSection.position}`} {...{ lineSection }} />)}
  </Flexbox>
