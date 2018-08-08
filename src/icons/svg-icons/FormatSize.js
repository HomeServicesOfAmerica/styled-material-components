import React from 'react';
import { Icon } from '../icons';

const FormatSizePath = () => [
  <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" key='path0' />,
];

const FormatSizeIcon = Icon.extend.attrs({
  children: FormatSizePath,
})``;

export default FormatSizePath;
export { FormatSizeIcon };
