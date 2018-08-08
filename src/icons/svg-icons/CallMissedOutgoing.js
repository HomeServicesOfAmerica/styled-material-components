import React from 'react';
import { Icon } from '../icons';

const CallMissedOutgoingPath = () => [
  <path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" key='path0' />,
];

const CallMissedOutgoingIcon = Icon.extend.attrs({
  children: CallMissedOutgoingPath,
})``;

export default CallMissedOutgoingPath;
export { CallMissedOutgoingIcon };
