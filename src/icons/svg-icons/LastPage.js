import React from 'react';
import { Icon } from '../icons';

const LastPagePath = () => [
  <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" key='path0' />,
];

const LastPageIcon = Icon.extend.attrs({
  children: LastPagePath,
})``;

export default LastPagePath;
export { LastPageIcon };
