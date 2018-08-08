import React from 'react';
import { Icon } from '../icons';

const ForwardPath = () => [
  <path d="M12 8V4l8 8-8 8v-4H4V8z" key='path0' />,
];

const ForwardIcon = Icon.extend.attrs({
  children: ForwardPath,
})``;

export default ForwardPath;
export { ForwardIcon };
