import * as React from 'react';
import styled from 'styled-components';
import { ArrowDropDownPath } from './ArrowDropDownPath';
import { KeyboardArrowLeftIconPath } from './KeyboardArrowLeftIconPath';
import { KeyboardArrowRightIconPath } from './KeyboardArrowRightIconPath';

const DEFAULT_FILL = 'rgb(0, 0, 0)';
const DEFAULT_SIZE = 24;
const DEFAULT_STYLE = {};

const iconPaths = {
  arrow_drop_down: ArrowDropDownPath,
  keyboard_arrow_left: KeyboardArrowLeftIconPath,
  keyboard_arrow_right:KeyboardArrowRightIconPath,
};

const getChildren = ({ icon }) => {
  if (!icon) return null;
  const Path = iconPaths[icon]
  if (Path) return <Path />;
  else {
    console.warn(`You have passed icon prop ${icon}. This does not correspond to
      any icons currently in the styled-material-components library. Icons names
      should be in lower snake case. If you have passed a valid icon name in
      lower snake case, we may not have this icon in styled-material-components
      yet, but would welcome a PR introducing it :)`);
    return null;
  }
}

export const Icon = styled.svg.attrs({
  fill: DEFAULT_FILL,
  height: DEFAULT_SIZE,
  width: DEFAULT_SIZE,
  viewBox: `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`,
  xmlns: "http://www.w3.org/2000/svg",
  children: getChildren,
})``;

export const ArrowDropDown = Icon.extend.attrs({
  children: ArrowDropDownPath,
})``

export const KeyboardArrowLeftIcon = Icon.extend.attrs({
  children: KeyboardArrowLeftIconPath,
})``

export const KeyboardArrowRightIcon = Icon.extend.attrs({
  children: KeyboardArrowRightIconPath,
})``
