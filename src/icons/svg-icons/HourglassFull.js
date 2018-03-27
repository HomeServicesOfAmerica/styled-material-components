import React from 'react';
import { Icon } from '../icons';

const HourglassFullPath = () => [
  <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" key='path0' />,
];

const HourglassFullIcon = Icon.extend.attrs({
  children: HourglassFullPath,
})``;

export default HourglassFullPath;
export { HourglassFullIcon };
