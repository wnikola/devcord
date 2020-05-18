import React from 'react';
import TopAppBar from './AppBar';
import { Typography } from '@material-ui/core';

export default function Landing() {
  return (
    <>
      <TopAppBar />
      <Typography variant='h1'>
        Welcome to devcord!
      </Typography>
    </>
  )
}