import React from 'react';
import { Icon } from '../icons';

const CallReceivedPath = () => [
  <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" key='path0' />,
];

const CallReceivedIcon = Icon.extend.attrs({
  children: CallReceivedPath,
})``;

export default CallReceivedPath;
export { CallReceivedIcon };
