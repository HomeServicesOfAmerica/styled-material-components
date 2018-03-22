import * as React from 'react';
import styled from 'styled-components';
import { ArrowBackPath } from './ArrowBackPath';
import { ArrowDropDownPath } from './ArrowDropDownPath';
import { ArrowForwardPath } from './ArrowForwardPath';
import { ArrowUpwardPath } from './ArrowUpwardPath';
import { BookmarkPath } from './BookmarkPath';
import { ClosePath } from './ClosePath';
import { FileDownloadPath } from './FileDownloadPath';
import { InfoOutlinePath } from './InfoOutlinePath';
import { KeyboardArrowDownPath } from './KeyboardArrowDownPath';
import { KeyboardArrowLeftPath } from './KeyboardArrowLeftPath';
import { KeyboardArrowRightPath } from './KeyboardArrowRightPath';
import { KeyboardArrowUpPath } from './KeyboardArrowUpPath';
import { PinDropPath } from './PinDropPath';
import { PrintPath } from './PrintPath';
import { MenuPath } from './MenuPath';
import { SearchPath } from './SearchPath';
import { StarBorderPath } from './StarBorderPath';
import { StarHalfPath } from './StarHalfPath';
import { StarPath } from './StarPath';

const DEFAULT_FILL = 'rgb(0, 0, 0)';
const DEFAULT_SIZE = 24;

const iconPaths = {
  arrow_back: ArrowBackPath,
  arrow_drop_down: ArrowDropDownPath,
  arrow_forward: ArrowForwardPath,
  bookmark: BookmarkPath,
  close: ClosePath,
  file_download: FileDownloadPath,
  info_outline: InfoOutlinePath,
  keyboard_arrow_down: KeyboardArrowDownPath,
  keyboard_arrow_left: KeyboardArrowLeftPath,
  keyboard_arrow_right: KeyboardArrowRightPath,
  keyboard_arrow_up: KeyboardArrowUpPath,
  pin_drop: PinDropPath,
  print: PrintPath,
  menu: MenuPath,
  search: SearchPath,
  star_border: StarBorderPath,
  star_half: StarHalfPath,
  star: StarPath,
  upward_arrow: ArrowUpwardPath,
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
  'data-smc': 'Icon',
})``;

export const ArrowBackIcon = Icon.extend.attrs({
  children: ArrowBackPath,
})``;
export const ArrowDropDownIcon = Icon.extend.attrs({
  children: ArrowDropDownPath,
})``;
export const ArrowForwardIcon = Icon.extend.attrs({
  children: ArrowForwardPath,
})``;
export const ArrowUpwardIcon = Icon.extend.attrs({
  children: ArrowUpwardPath,
})``;
export const BookmarkIcon = Icon.extend.attrs({
  children: BookmarkPath,
})``;
export const CloseIcon = Icon.extend.attrs({
  children: ClosePath,
})``;
export const FileDownloadIcon = Icon.extend.attrs({
  children: FileDownloadPath,
})``;
export const InfoOutlineIcon = Icon.extend.attrs({
  children: InfoOutlinePath,
})``;
export const KeyboardArrowDownIcon = Icon.extend.attrs({
  children: KeyboardArrowDownPath,
})``;
export const KeyboardArrowLeftIcon = Icon.extend.attrs({
  children: KeyboardArrowLeftPath,
})``;
export const KeyboardArrowRightIcon = Icon.extend.attrs({
  children: KeyboardArrowRightPath,
})``;
export const KeyboardArrowUpIcon = Icon.extend.attrs({
  children: KeyboardArrowUpPath,
})``;
export const PinDropIcon = Icon.extend.attrs({
  children: PinDropPath,
})``;
export const PrintIcon = Icon.extend.attrs({
  children: PrintPath,
})``;
export const MenuIcon = Icon.extend.attrs({
  children: MenuPath,
})``;
export const SearchIcon = Icon.extend.attrs({
  children: SearchPath,
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
