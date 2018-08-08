import React from 'react';
import { Icon } from '../icons';

const ClearPath = () => [
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" key='path0' />,
];

const ClearIcon = Icon.extend.attrs({
  children: ClearPath,
})``;

export default ClearPath;
export { ClearIcon };
