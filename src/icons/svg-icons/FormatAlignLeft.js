import React from 'react';
import { Icon } from '../icons';

const FormatAlignLeftPath = () => [
  <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" key='path0' />,
];

const FormatAlignLeftIcon = Icon.extend.attrs({
  children: FormatAlignLeftPath,
})``;

export default FormatAlignLeftPath;
export { FormatAlignLeftIcon };
