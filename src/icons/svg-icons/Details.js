import React from 'react';
import { Icon } from '../icons';

const DetailsPath = () => [
  <path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" key='path0' />,
];

const DetailsIcon = Icon.extend.attrs({
  children: DetailsPath,
})``;

export default DetailsPath;
export { DetailsIcon };
