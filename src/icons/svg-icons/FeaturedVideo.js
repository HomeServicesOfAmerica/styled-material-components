import React from 'react';
import { Icon } from '../icons';

const FeaturedVideoPath = () => [
  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z" key='path0' />,
];

const FeaturedVideoIcon = Icon.extend.attrs({
  children: FeaturedVideoPath,
})``;

export default FeaturedVideoPath;
export { FeaturedVideoIcon };
