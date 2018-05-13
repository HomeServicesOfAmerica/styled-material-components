// @flow

/*
 * TODO declare this as a global
 */

export type MaterialSliderColorThemeOverridesType = {
  disabledColor?: string,
  disabledOpacity?: string,
  focusHaloColor?: string,
  focusHaloOpacity?: string,
  focusTrackOpacity?: string,
  mainColor?: string,
  mainColorAtZero?: string,
  mainOpacity?: string,
  pageColor?: string,
  trackColor?: string,
  trackOpacity?: string
};

export type MaterialSliderColorThemeType = {|
  disabled: string,
  focusHalo: string,
  focusTrack: string,
  main: string,
  mainAtZero: string,
  pageColor: string,
  track: string
|};

export type MaterialSliderTransitionsThemeOverridesType = {
  main?: string,
  slider?: string
};

export type MaterialSliderTransitionsThemeType = {|
  main: string,
  slider: string
|};

export type MaterialSliderSizesThemeOverridesType = {
  clickableHeight?: number,
  focusHalo?: number,
  thumb?: number,
  thumbBorder?: number,
  thumbClicked?: number,
  thumbDisabled?: number,
  thumbDisabledBorder?: number,
  trackHeight?: number
};

export type MaterialSliderSizesThemeType = {|
  clickableHeight: number,
  focusHalo: number,
  thumb: number,
  thumbBorder: number,
  thumbClicked: number,
  thumbDisabled: number,
  thumbDisabledBorder: number,
  trackHeight: number
|};

export type MaterialSliderThemeOverridesType = {
  colors?: MaterialSliderColorThemeOverridesType,
  sizes?: MaterialSliderSizesThemeOverridesType,
  transitions?: MaterialSliderTransitionsThemeOverridesType
};

export type MaterialSliderThemeType = {|
  colors: MaterialSliderColorThemeType,
  sizes: MaterialSliderSizesThemeType,
  transitions: MaterialSliderTransitionsThemeType
|};

/*
 * TODO make this a generic type that lets the user name the screen sizes
 * whatever they want and pass in anything they want for screen sizes, but
 * will then enforce their selections
 */
export type StyledMaterialComponentsThemeType = {|
  accent: string,
  disabledCheckbox: string,
  elevation: {
    colors: {
      ambient: string,
      penumbra: string,
      umbra: string
    },
    property: string,
    transition: {
      duration: string,
      effect: string
    }
  },
  inputColorOverrides: {
    textField: ?string
  },
  layout: {
    baseGridSize: number,
    gutterSize: string,
    screenSizePriority: Array<string>,
    screenSizes: {
      [breakpoint: string]: string
    }
  },
  primary: string,
  slider: MaterialSliderThemeType,
  textColors: {
    disabled: string,
    hint: string,
    icon: string,
    primary: string,
    secondary: string
  },
  toolbar: {
    horizontalPaddingDesktop: string,
    horizontalPaddingMobile: string,
    iconPadding: string,
    iconSize: string
  },
  white: string
|};

export type ProvidedThemeType = {|
  accent?: string,
  disabledCheckbox?: string,
  elevation?: {
    colors?: {
      ambient?: string,
      penumbra?: string,
      umbra?: string
    },
    property?: string,
    transition?: {
      duration?: string,
      effect?: string
    }
  },
  inputColorOverrides?: {
    textField?: ?string
  },
  layout?: {
    baseGridSize?: number,
    gutterSize?: string,
    screenSizePriority?: Array<string>,
    screenSizes?: {
      [breakpoint: string]: string
    }
  },
  primary?: string,
  slider?: MaterialSliderThemeOverridesType,
  textColors?: {
    disabled?: string,
    hint?: string,
    icon?: string,
    primary?: string,
    secondary?: string
  },
  toolbar?: {
    horizontalPaddingDesktop?: string,
    horizontalPaddingMobile?: string,
    iconPadding?: string,
    iconSize?: string
  },
  white?: string
|};

export type StyledComponentPropsType = {|
  className: string
|};

export type StyledComponentsContextPropsType = {|
  theme: StyledMaterialComponentsThemeType
|};

export type ScreenSizeType = "xl" | "lg" | "md" | "sm" | "xs" | "server";
