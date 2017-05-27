import Color from 'color';

const black = Color('#000');

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
};

export default defaultTheme;
