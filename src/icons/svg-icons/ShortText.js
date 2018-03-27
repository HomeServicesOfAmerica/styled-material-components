import React from 'react';
import { Icon } from '../icons';

const ShortTextPath = () => [
  <path d="M4 9h16v2H4zm0 4h10v2H4z" key='path0' />,
];

const ShortTextIcon = Icon.extend.attrs({
  children: ShortTextPath,
})``;

export default ShortTextPath;
export { ShortTextIcon };
