import React from 'react';
import { Icon } from '../icons';

const FormatItalicPath = () => [
  <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" key='path0' />,
];

const FormatItalicIcon = Icon.extend.attrs({
  children: FormatItalicPath,
})``;

export default FormatItalicPath;
export { FormatItalicIcon };
