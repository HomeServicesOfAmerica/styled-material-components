// @flow
import React, { type Node } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import merge from "lodash.merge";

import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import { defaultTheme } from "./defaultTheme";
import { type ProvidedThemeType } from "./types";

/* eslint-disable no-unused-expressions */
/* eslint-disable flowtype/no-unused-expressions */
injectGlobal`
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

type MaterialThemeProviderPropsType = {
  children: Node,
  theme: ProvidedThemeType
};

const MaterialThemeProvider = ({
  children,
  theme = {}
}: MaterialThemeProviderPropsType) => (
  <ThemeProvider theme={merge(defaultTheme, theme)}>
    <ScreenSizeContext>{children}</ScreenSizeContext>
  </ThemeProvider>
);

export default MaterialThemeProvider;
