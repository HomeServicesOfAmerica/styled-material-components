import React from 'react';
import { Icon } from '../icons';

const MusicNotePath = () => [
  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" key='path0' />,
];

const MusicNoteIcon = Icon.extend.attrs({
  children: MusicNotePath,
})``;

export default MusicNotePath;
export { MusicNoteIcon };
