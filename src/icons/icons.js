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

const getChildren = (icon) => {
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

const IconComponent = props => (
  <svg
    className={props.className}
    data-smc="Icon"
    fill={props.fill || DEFAULT_FILL}
    height={props.size || DEFAULT_SIZE}
    viewBox=" 0 0 24 24"
    width={props.size || DEFAULT_SIZE}
    xlmns="http://www.w3.org/2000/svg"
  >
    {props.children || getChildren(props.icon)}
  </svg>
);

export const Icon = styled(IconComponent)``;
