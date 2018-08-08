import React from 'react';
import { Icon } from '../icons';

const SchoolPath = () => [
  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" key='path0' />,
];

const SchoolIcon = Icon.extend.attrs({
  children: SchoolPath,
})``;

export default SchoolPath;
export { SchoolIcon };
