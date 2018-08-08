import { css } from 'styled-components';
import Color from 'color';

export const getWhite = ({ theme }) => theme.white;
export const getPrimaryText = ({ theme }) => theme.textColors.primary;

export const contrastingColor = (style, hexCode) => {
  const color = new Color(hexCode);
  const mode = color.luminosity() < 0.26 ? 'WHITE' : 'PRIMARY';
  return css`
    ${style}: ${mode === 'WHITE' ? getWhite : getPrimaryText};
  `;
};
