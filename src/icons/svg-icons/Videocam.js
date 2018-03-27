import React from 'react';
import { Icon } from '../icons';

const VideocamPath = () => [
  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" key='path0' />,
];

const VideocamIcon = Icon.extend.attrs({
  children: VideocamPath,
})``;

export default VideocamPath;
export { VideocamIcon };
