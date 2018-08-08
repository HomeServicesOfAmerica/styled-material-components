import React from 'react';
import { Icon } from '../icons';

const StopPath = () => [
  <path d="M6 6h12v12H6z" key='path0' />,
];

const StopIcon = Icon.extend.attrs({
  children: StopPath,
})``;

export default StopPath;
export { StopIcon };
