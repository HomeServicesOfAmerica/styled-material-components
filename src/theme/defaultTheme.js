import { black } from './colors';
import { makeMaterialSliderTheme } from './makeMaterialSliderTheme';

const sliderTheme = makeMaterialSliderTheme();

const PREFIX = 'screen and';
const minW = min => `(min-width: ${min}px)`;
const maxW = max => `(max-width: ${max}px)`;
const o = or => `(orientation: ${or})`;

export const generateBreakpoint = ({ min, max, orientation, enforceAspectRatio }) => {
  let breakpoint = `${PREFIX} ${minW(min)}`;
  if (max) {
    breakpoint += ` and ${maxW(max)}`;
  }

  if (orientation) {
    breakpoint += ` and ${o(orientation)}`;
  }

  if (enforceAspectRatio) {
    breakpoint += ` and (max-aspect-ratio: 4/3)`;
  }

  return breakpoint;
};

const xs = generateBreakpoint({
  min: 0,
  max: 600,
});

const sm = generateBreakpoint({
  min: 601,
  max: 960,
});

const md = generateBreakpoint({
  min: 961,
  max: 1280,
});

const lg = generateBreakpoint({
  min: 1281,
  max: 1960,
});

const xl = generateBreakpoint({
  min: 1961,
});

export const defaultTheme = {
  primary: '#3f51b5',
  accent: '#ff4081',
  white: '#ffffff',
  layout: {
    baseGridSize: 12,
    // When using the layout features, what screensize should we default to when it is unknown
    defaultScreenSize: 'xs',
    gutterSize: '16px',
    screenSizePriority: ['xl', 'lg', 'md', 'sm', 'xs'],
    screenSizes: {
      [xs]: 'xs',
      [sm]: 'sm',
      [md]: 'md',
      [lg]: 'lg',
      [xl]: 'xl',
    },
  },
  // Elevation theme
  elevation: {
    // What property to use to apply depth
    property: 'box-shadow',
    // Transition for animating buttons
    transition: {
      duration: '280ms',
      effect: 'cubic-bezier(.4, 0, .2, 1)',
    },
    colors: {
      umbra: black.alpha(0.2).toString(),
      penumbra: black.alpha(0.14).toString(),
      ambient: black.alpha(0.12).toString(),
    },
  },
  textColors: {
    primary: black.alpha(0.87).toString(),
    secondary: black.alpha(0.54).toString(),
    hint: black.alpha(0.38).toString(),
    disabled: black.alpha(0.38).toString(),
    icon: black.alpha(0.38).toString(),
  },
  inputColorOverrides: {
    textField: null,
  },
  slider: sliderTheme,
  disabledCheckbox: black.alpha(0.26).toString(),
  toolbar: {
    horizontalPaddingDesktop: '24px',
    horizontalPaddingMobile: '16px',
    iconSize: '24px',
    iconPadding: '12px',
  },
};
