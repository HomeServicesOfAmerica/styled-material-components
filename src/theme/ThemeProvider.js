import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import merge from 'lodash.merge';
import defaultTheme from './defaultTheme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
`;
/* eslint-enable */

const MaterialThemeProvider = ({ children, theme = {} }) => (
  <ThemeProvider theme={merge(defaultTheme, theme)}>
    {children}
  </ThemeProvider>
);

export default MaterialThemeProvider;
