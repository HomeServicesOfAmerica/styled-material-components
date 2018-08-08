import React from 'react';
import { Icon } from '../icons';

const ArrowDownwardPath = () => [
  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" key='path0' />,
];

const ArrowDownwardIcon = Icon.extend.attrs({
  children: ArrowDownwardPath,
})``;

export default ArrowDownwardPath;
export { ArrowDownwardIcon };
