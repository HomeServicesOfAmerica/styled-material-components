import React from 'react';
import { Icon } from '../icons';

const PlayCircleFilledPath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" key='path0' />,
];

const PlayCircleFilledIcon = Icon.extend.attrs({
  children: PlayCircleFilledPath,
})``;

export default PlayCircleFilledPath;
export { PlayCircleFilledIcon };
