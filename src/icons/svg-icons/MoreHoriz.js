import React from 'react';
import { Icon } from '../icons';

const MoreHorizPath = () => [
  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" key='path0' />,
];

const MoreHorizIcon = Icon.extend.attrs({
  children: MoreHorizPath,
})``;

export default MoreHorizPath;
export { MoreHorizIcon };
