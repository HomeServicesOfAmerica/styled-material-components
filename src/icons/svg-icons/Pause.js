import React from 'react';
import { Icon } from '../icons';

const PausePath = () => [
  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" key='path0' />,
];

const PauseIcon = Icon.extend.attrs({
  children: PausePath,
})``;

export default PausePath;
export { PauseIcon };
