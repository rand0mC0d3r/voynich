/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Flexbox from '../Flexbox';
import Line from '../Line';

export default () => {
  const [lineSections, setLineSections] = useState([
    { height: 30, position: 0 },
    { height: 21, position: -28 },
    { height: 22, position: -46 },
    { height: 22, position: -66 },
    { height: 24, position: -85 },
  ]);

  return <div>
    <Typography variant='h6'>Lines: {lineSections.length}</Typography>
    <Flexbox direction='column' gap="medium">
      {lineSections.map((lineSection, index) => <Line key={index} index={index} lineSection={lineSection} />)}
    </Flexbox>
  </div>
}
