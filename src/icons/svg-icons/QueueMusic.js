import React from 'react';
import { Icon } from '../icons';

const QueueMusicPath = () => [
  <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" key='path0' />,
];

const QueueMusicIcon = Icon.extend.attrs({
  children: QueueMusicPath,
})``;

export default QueueMusicPath;
export { QueueMusicIcon };
