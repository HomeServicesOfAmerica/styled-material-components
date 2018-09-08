import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import merge from 'lodash.merge';
import { ScreenSizeContext } from '../contexts/ScreenSizeContext';
import { defaultTheme } from './defaultTheme';

/* eslint-disable no-unused-expressions */
export const StyledMaterialComponentsGlobals = createGlobalStyle`
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

const MaterialThemeProvider = ({ children, theme = {}, includeSMCGlobals = true }) => (
  <ThemeProvider theme={merge(defaultTheme, theme)}>
    <>
      {includeSMCGlobals && <StyledMaterialComponentsGlobals />}
      <ScreenSizeContext>
        {children}
      </ScreenSizeContext>
    </>
  </ThemeProvider>
);

export default MaterialThemeProvider;
