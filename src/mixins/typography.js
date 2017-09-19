import { css } from 'styled-components';

const fontWeightStyles = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

const marginStyles = {
  display4: css`
    margin: -1rem 0 3.5rem -.085em;
  `,
  display3: css`
    margin: -8px 0 64px -.07em;
  `,
  display2: css`
    margin: -.5rem 0 4rem -.07em;
  `,
  display1: css`
    margin: -.5rem 0 4rem -.07em;
  `,
  headline: css`
    margin: -.5rem 0 1rem -.06em;
  `,
  title: css`
    margin: -.5rem 0 1rem -.05em;
  `,
  subheading2: css`
    margin: -.5rem 0 1rem -.06em;
  `,
  subheading1: css`
    margin: -.313rem 0 .813rem -.06em;
  `,
  body2: css`
    margin: -.25rem 0 .75rem 0;
  `,
  body1: css`
    margin: -.25rem 0 .75rem 0;
  `,
  caption: css`
    margin: -.5rem 0 1rem -.04em;
  `,
};

const typographyStyles = {
  display4: css`
    font-size: 7rem;
    line-height: 7rem;
    font-weight: ${fontWeightStyles.light};
    letter-spacing: -.04em;
  `,
  display3: css`
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: -.02em;
  `,
  display2: css`
    font-size: 2.813rem;
    line-height: 3rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: normal;
  `,
  display1: css`
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: normal;
  `,
  headline: css`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: normal;
  `,
  title: css`
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: ${fontWeightStyles.medium};
    letter-spacing: .02em;
  `,
  subheading2: css`
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: .04em;
  `,
  subheading1: css`
    font-size: .938rem;
    line-height: 1.5rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: .04em;
  `,
  body2: css`
    font-size: .875rem;
    line-height: 1.5rem;
    font-weight: ${fontWeightStyles.medium};
    letter-spacing: .04em;
  `,
  body1: css`
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: .04em;
  `,
  caption: css`
    font-size: .75rem;
    line-height: 1.25rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: .08em;
  `,
};

const typography = style => css`
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  ${typographyStyles[style]}
`;

export const typographyAdjustMargin = style => css`
  ${marginStyles[style]}
`;

export default typography;
