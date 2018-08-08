import React from 'react';
import { Icon } from '../icons';

const VolumeMutePath = () => [
  <path d="M7 9v6h4l5 5V4l-5 5H7z" key='path0' />,
];

const VolumeMuteIcon = Icon.extend.attrs({
  children: VolumeMutePath,
})``;

export default VolumeMutePath;
export { VolumeMuteIcon };
