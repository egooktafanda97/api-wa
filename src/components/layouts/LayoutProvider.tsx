'use client';
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import '@/assets/scss/style.scss';
import React from 'react';
import { useSelector } from 'react-redux';

import themes from './themes';
import NavigationScroll from '@/components/layouts/NavigationScroll';

interface chid {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: chid) {
  return (
    <ThemeProvider theme={themes({})}>
      <CssBaseline />
      <NavigationScroll>{children}</NavigationScroll>
    </ThemeProvider>
  );
}
