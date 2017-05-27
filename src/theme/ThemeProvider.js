import React from 'react';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import defaultTheme from './defaultTheme';

const MaterialThemeProvider = ({ children, theme = {} }) => (
  <ThemeProvider theme={merge(defaultTheme, theme)}>
    {children}
  </ThemeProvider>
);

export default MaterialThemeProvider;
