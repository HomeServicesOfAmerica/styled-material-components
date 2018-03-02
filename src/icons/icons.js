import * as React from 'react';
import styled from 'styled-components';
import { ArrowDropDownPath } from './ArrowDropDownPath';
import { KeyboardArrowLeftPath } from './KeyboardArrowLeftPath';
import { KeyboardArrowRightPath } from './KeyboardArrowRightPath';
import { StarBorderPath } from './StarBorderPath';
import { StarHalfPath } from './StarHalfPath';
import { StarPath } from './StarPath';
import { KeyboardArrowUpPath } from './KeyboardArrowUpPath';
import { KeyboardArrowDownPath } from './KeyboardArrowDownPath';
import { PinDropPath } from './PinDropPath';

const DEFAULT_FILL = 'rgb(0, 0, 0)';
const DEFAULT_SIZE = 24;

const iconPaths = {
  arrow_drop_down: ArrowDropDownPath,
  keyboard_arrow_left: KeyboardArrowLeftPath,
  keyboard_arrow_right: KeyboardArrowRightPath,
  star_border: StarBorderPath,
  star_half: StarHalfPath,
  star: StarPath,
  keyboard_arrow_up: KeyboardArrowUpPath,
  keyboard_arrow_down: KeyboardArrowDownPath,
  pin_drop: PinDropPath,
};

const getChildren = ({ icon }) => {
  if (!icon) return null;
  const Path = iconPaths[icon];
  if (Path) return <Path />;
  // eslint-disable-next-line no-console
  console.warn(`You have passed icon prop ${icon}. This does not correspond to
      any icons currently in the styled-material-components library. Icons names
      should be in lower snake case. If you have passed a valid icon name in
      lower snake case, we may not have this icon in styled-material-components
      yet, but would welcome a PR introducing it :)`);
  return null;
};

export const Icon = styled.svg.attrs({
  fill: DEFAULT_FILL,
  height: DEFAULT_SIZE,
  width: DEFAULT_SIZE,
  viewBox: `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`,
  xmlns: 'http://www.w3.org/2000/svg',
  children: getChildren,
})``;

export const ArrowDropDown = Icon.extend.attrs({
  children: ArrowDropDownPath,
})``;

export const KeyboardArrowLeftIcon = Icon.extend.attrs({
  children: KeyboardArrowLeftPath,
})``;

export const KeyboardArrowRightIcon = Icon.extend.attrs({
  children: KeyboardArrowRightPath,
})``;
export const StarBorderIcon = Icon.extend.attrs({
  children: StarBorderPath,
})``;
export const StarHalfIcon = Icon.extend.attrs({
  children: StarHalfPath,
})``;
export const StarIcon = Icon.extend.attrs({
  children: StarPath,
})``;
export const KeyboardArrowUpIcon = Icon.extend.attrs({
  children: KeyboardArrowUpPath,
})``;
export const KeyboardArrowDownIcon = Icon.extend.attrs({
  children: KeyboardArrowDownPath,
})``;
export const PinDropPathIcon = Icon.extend.attrs({
  children: PinDropPath,
})``;
