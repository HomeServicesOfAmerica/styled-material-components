import React from 'react';
import { Icon } from '../icons';

const KeyboardArrowLeftPath = () => [
  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" key='path0' />,
];

const KeyboardArrowLeftIcon = Icon.extend.attrs({
  children: KeyboardArrowLeftPath,
})``;

export default KeyboardArrowLeftPath;
export { KeyboardArrowLeftIcon };
