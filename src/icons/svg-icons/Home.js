import React from 'react';
import { Icon } from '../icons';

const HomePath = () => [
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" key='path0' />,
];

const HomeIcon = Icon.extend.attrs({
  children: HomePath,
})``;

export default HomePath;
export { HomeIcon };
