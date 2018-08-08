import React from 'react';
import { Icon } from '../icons';

const AirplayPath = () => [
  <path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" key='path0' />,
];

const AirplayIcon = Icon.extend.attrs({
  children: AirplayPath,
})``;

export default AirplayPath;
export { AirplayIcon };
