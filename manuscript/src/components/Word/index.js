/* eslint-disable import/no-anonymous-default-export */
import { Typography } from '@mui/material';
import React from 'react';
import manuscript from '../../images.jpeg';
import Flexbox from '../Flexbox';

const width = 426
const multiplier= 2

export default ({ wordSection, lineSection }) =>
  <Flexbox>
    {lineSection.height} x {lineSection.position}
    {/* {JSON.stringify(lineSection.height)} */}
    {/* {JSON.stringify(wordSection)} */}
    {/* {position} x {width} */}
    {/* {start} x {end} */}
    {wordSection.text}
  </Flexbox>
