import React from 'react';
import { Icon } from '../icons';

const ArrowForwardPath = () => [
  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" key='path0' />,
];

const ArrowForwardIcon = Icon.extend.attrs({
  children: ArrowForwardPath,
})``;

export default ArrowForwardPath;
export { ArrowForwardIcon };
