import React from 'react';
import { Icon } from '../icons';

const CallMissedPath = () => [
  <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z" key='path0' />,
];

const CallMissedIcon = Icon.extend.attrs({
  children: CallMissedPath,
})``;

export default CallMissedPath;
export { CallMissedIcon };
