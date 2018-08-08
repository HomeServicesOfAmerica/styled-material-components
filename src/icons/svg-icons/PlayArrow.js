import React from 'react';
import { Icon } from '../icons';

const PlayArrowPath = () => [
  <path d="M8 5v14l11-7z" key='path0' />,
];

const PlayArrowIcon = Icon.extend.attrs({
  children: PlayArrowPath,
})``;

export default PlayArrowPath;
export { PlayArrowIcon };
