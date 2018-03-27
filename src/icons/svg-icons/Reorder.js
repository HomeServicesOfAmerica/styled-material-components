import React from 'react';
import { Icon } from '../icons';

const ReorderPath = () => [
  <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" key='path0' />,
];

const ReorderIcon = Icon.extend.attrs({
  children: ReorderPath,
})``;

export default ReorderPath;
export { ReorderIcon };
