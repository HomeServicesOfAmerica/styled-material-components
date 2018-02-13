import { black } from './colors';
import { makeMaterialSliderTheme } from './makeMaterialSliderTheme';

const sliderTheme = makeMaterialSliderTheme();

const defaultTheme = {
  primary: '#3f51b5',
  accent: '#ff4081',
  white: '#ffffff',
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
  slider: sliderTheme,
  disabledCheckbox: black.alpha(0.26).toString(),
};

export default defaultTheme;
