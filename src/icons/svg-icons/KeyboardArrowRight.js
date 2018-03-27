import React from 'react';
import { Icon } from '../icons';

const KeyboardArrowRightPath = () => [
  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" key='path0' />,
];

const KeyboardArrowRightIcon = Icon.extend.attrs({
  children: KeyboardArrowRightPath,
})``;

export default KeyboardArrowRightPath;
export { KeyboardArrowRightIcon };
