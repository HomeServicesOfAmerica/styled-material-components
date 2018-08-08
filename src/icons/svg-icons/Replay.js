import React from 'react';
import { Icon } from '../icons';

const ReplayPath = () => [
  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" key='path0' />,
];

const ReplayIcon = Icon.extend.attrs({
  children: ReplayPath,
})``;

export default ReplayPath;
export { ReplayIcon };
