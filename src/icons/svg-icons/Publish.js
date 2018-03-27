import React from 'react';
import { Icon } from '../icons';

const PublishPath = () => [
  <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" key='path0' />,
];

const PublishIcon = Icon.extend.attrs({
  children: PublishPath,
})``;

export default PublishPath;
export { PublishIcon };
