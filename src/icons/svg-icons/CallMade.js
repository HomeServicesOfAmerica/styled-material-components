import React from 'react';
import { Icon } from '../icons';

const CallMadePath = () => [
  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" key='path0' />,
];

const CallMadeIcon = Icon.extend.attrs({
  children: CallMadePath,
})``;

export default CallMadePath;
export { CallMadeIcon };
