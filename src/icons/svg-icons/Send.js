import React from 'react';
import { Icon } from '../icons';

const SendPath = () => [
  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" key='path0' />,
];

const SendIcon = Icon.extend.attrs({
  children: SendPath,
})``;

export default SendPath;
export { SendIcon };
