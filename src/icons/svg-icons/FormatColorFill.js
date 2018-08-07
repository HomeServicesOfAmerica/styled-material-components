import React from 'react';

import { Icon } from '../icons';

const FormatColorFillPath = () => [
  <path
    d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"
    key="path0"
  />,
  <path fillOpacity=".36" d="M0 20h24v4H0z" key="path1" />,
];

const FormatColorFillIcon = Icon.extend.attrs({
  children: FormatColorFillPath,
})``;

export default FormatColorFillPath;
export { FormatColorFillIcon };
