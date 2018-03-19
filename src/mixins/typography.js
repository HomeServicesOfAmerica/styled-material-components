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
    margin: -1rem 0 3.5rem -0.085em;
  `,
  display3: css`
    margin: -8px 0 64px -0.07em;
  `,
  display2: css`
    margin: -0.5rem 0 4rem -0.07em;
  `,
  display1: css`
    margin: -0.5rem 0 4rem -0.07em;
  `,
  headline: css`
    margin: -0.5rem 0 1rem -0.06em;
  `,
  title: css`
    margin: -0.5rem 0 1rem -0.05em;
  `,
  subheading2: css`
    margin: -0.5rem 0 1rem -0.06em;
  `,
  subheading1: css`
    margin: -0.313rem 0 0.813rem -0.06em;
  `,
  body2: css`
    margin: -0.25rem 0 0.75rem 0;
  `,
  body1: css`
    margin: -0.25rem 0 0.75rem 0;
  `,
  caption: css`
    margin: -0.5rem 0 1rem -0.04em;
  `,
};

const typographyStyles = {
  display4: css`
    font-size: 7rem;
    line-height: 7rem;
    font-weight: ${fontWeightStyles.light};
    letter-spacing: -0.04em;
  `,
  display3: css`
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: -0.02em;
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
    letter-spacing: 0.02em;
  `,
  subheading2: css`
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: 0.04em;
  `,
  subheading1: css`
    font-size: 0.938rem;
    line-height: 1.5rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: 0.04em;
  `,
  body2: css`
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: ${fontWeightStyles.medium};
    letter-spacing: 0.04em;
  `,
  body1: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: 0.04em;
  `,
  caption: css`
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: ${fontWeightStyles.regular};
    letter-spacing: 0.08em;
  `,
  button: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: ${fontWeightStyles.medium};
    letter-spacing: 0.04em;
    text-transform: uppercase;
  `,
};

const DEFAULT_FONT_FAMILY = 'Roboto, sans-serif';

const typography = style => () => css`
  font-family: ${({ theme: { fontFamilyOverride } }) => fontFamilyOverride || DEFAULT_FONT_FAMILY};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  ${typographyStyles[style]};
`;

export const typographyAdjustMargin = style => css`
  ${marginStyles[style]};
`;

export const overflowEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default typography;
