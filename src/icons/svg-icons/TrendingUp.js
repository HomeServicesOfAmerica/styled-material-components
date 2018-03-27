import React from 'react';
import { Icon } from '../icons';

const TrendingUpPath = () => [
  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" key='path0' />,
];

const TrendingUpIcon = Icon.extend.attrs({
  children: TrendingUpPath,
})``;

export default TrendingUpPath;
export { TrendingUpIcon };
