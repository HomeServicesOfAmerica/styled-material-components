import React from 'react';
import { Icon } from '../icons';

const NetworkCellPath = () => [
  <path fillOpacity=".3" d="M2 22h20V2z" key='path0' />,
  <path d="M17 7L2 22h15z" key='path1' />,
];

const NetworkCellIcon = Icon.extend.attrs({
  children: NetworkCellPath,
})``;

export default NetworkCellPath;
export { NetworkCellIcon };
