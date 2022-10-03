/* eslint-disable import/no-anonymous-default-export */
import { Typography } from '@mui/material';
import React from 'react';
import Flexbox from '../Flexbox';
import Image from '../Image';

export default ({ word, lineSection }) => {
  const { text, width, start } = word
  const { position, height } = lineSection

  return <Flexbox direction='column' fullWidth={false} fullHeight={false} wrap="nowrap">
    <Image {...{start, width, height, position}} />
    <Typography>{text}</Typography>
  </Flexbox>
}
