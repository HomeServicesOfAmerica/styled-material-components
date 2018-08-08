import React from 'react';
import { Icon } from '../icons';

const MoreVertPath = () => [
  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" key='path0' />,
];

const MoreVertIcon = Icon.extend.attrs({
  children: MoreVertPath,
})``;

export default MoreVertPath;
export { MoreVertIcon };
