import React from 'react';
import { Icon } from '../icons';

const ArrowBackPath = () => [
  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" key='path0' />,
];

const ArrowBackIcon = Icon.extend.attrs({
  children: ArrowBackPath,
})``;

export default ArrowBackPath;
export { ArrowBackIcon };
