/* eslint-disable import/no-anonymous-default-export */
import { Typography } from '@mui/material';
import React from 'react';
import manuscript from '../../images.jpeg';
import Flexbox from '../Flexbox';

export default ({ index, lineSection }) =>
  <Flexbox>
    <Typography>{index}</Typography>
    <div style={{
      backgroundImage: `url(${manuscript})`,
      width: '426px',
      height: `${lineSection.height}px`,
      backgroundPosition: `0px ${lineSection.position}px`,
    }} />
  </Flexbox>
