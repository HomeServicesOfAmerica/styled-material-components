import React from 'react';
import { Icon } from '../icons';

const CheckPath = () => [
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" key='path0' />,
];

const CheckIcon = Icon.extend.attrs({
  children: CheckPath,
})``;

export default CheckPath;
export { CheckIcon };
