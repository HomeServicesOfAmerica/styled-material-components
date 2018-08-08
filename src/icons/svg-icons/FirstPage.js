import React from 'react';
import { Icon } from '../icons';

const FirstPagePath = () => [
  <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" key='path0' />,
];

const FirstPageIcon = Icon.extend.attrs({
  children: FirstPagePath,
})``;

export default FirstPagePath;
export { FirstPageIcon };
