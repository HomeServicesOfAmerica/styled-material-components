import React from 'react';
import { Icon } from '../icons';

const MarkunreadMailboxPath = () => [
  <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" key='path0' />,
];

const MarkunreadMailboxIcon = Icon.extend.attrs({
  children: MarkunreadMailboxPath,
})``;

export default MarkunreadMailboxPath;
export { MarkunreadMailboxIcon };
