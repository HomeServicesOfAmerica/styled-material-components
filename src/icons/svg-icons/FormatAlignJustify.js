import React from 'react';
import { Icon } from '../icons';

const FormatAlignJustifyPath = () => [
  <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" key='path0' />,
];

const FormatAlignJustifyIcon = Icon.extend.attrs({
  children: FormatAlignJustifyPath,
})``;

export default FormatAlignJustifyPath;
export { FormatAlignJustifyIcon };
