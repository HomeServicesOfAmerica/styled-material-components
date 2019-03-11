import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import merge from 'lodash.merge';
import { ScreenSizeProvider } from '../contexts/ScreenSizeContext';
import { defaultTheme } from './defaultTheme';

/* eslint-disable no-unused-expressions */
export const SMCGlobalStyles = createGlobalStyle`
  body {
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    font-family: Roboto,sans-serif;
  }
`;
/* eslint-enable */

export const MaterialThemeProvider = ({ children, theme = {} }) => (
  <ThemeProvider theme={merge(defaultTheme, theme)}>
    <ScreenSizeProvider>
      {children}
    </ScreenSizeProvider>
  </ThemeProvider>
);
