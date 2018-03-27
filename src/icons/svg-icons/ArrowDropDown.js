import React from 'react';
import { Icon } from '../icons';

const ArrowDropDownPath = () => [
  <path d="M7 10l5 5 5-5z" key='path0' />,
];

const ArrowDropDownIcon = Icon.extend.attrs({
  children: ArrowDropDownPath,
})``;

export default ArrowDropDownPath;
export { ArrowDropDownIcon };
