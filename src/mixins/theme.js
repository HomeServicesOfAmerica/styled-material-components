// @flow
import { css } from 'styled-components';
import Color from 'color';

import { type StyledComponentsContextPropsType } from '../theme/types';

export const getWhite = ({ theme }: StyledComponentsContextPropsType): string =>
  theme.white;
export const getPrimaryText = ({
  theme,
}: StyledComponentsContextPropsType): string => theme.textColors.primary;

export const contrastingColor = (style: string, hexCode: string): string => {
  const color = new Color(hexCode);
  const mode = color.luminosity() < 0.26 ? 'WHITE' : 'PRIMARY';
  return css`
    ${style}: ${mode === 'WHITE' ? getWhite : getPrimaryText};
  `;
};
