import React from 'react';
import { Icon } from '../icons';

const SkipPreviousPath = () => [
  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" key='path0' />,
];

const SkipPreviousIcon = Icon.extend.attrs({
  children: SkipPreviousPath,
})``;

export default SkipPreviousPath;
export { SkipPreviousIcon };
