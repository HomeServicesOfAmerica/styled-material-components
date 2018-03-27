import React from 'react';
import { Icon } from '../icons';

const FormatColorTextPath = () => [
  <path fillOpacity=".36" d="M0 20h24v4H0z" key='path0' />,
  <path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" key='path1' />,
];

const FormatColorTextIcon = Icon.extend.attrs({
  children: FormatColorTextPath,
})``;

export default FormatColorTextPath;
export { FormatColorTextIcon };
