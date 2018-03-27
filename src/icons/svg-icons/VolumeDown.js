import React from 'react';
import { Icon } from '../icons';

const VolumeDownPath = () => [
  <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" key='path0' />,
];

const VolumeDownIcon = Icon.extend.attrs({
  children: VolumeDownPath,
})``;

export default VolumeDownPath;
export { VolumeDownIcon };
