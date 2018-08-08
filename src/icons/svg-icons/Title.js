import React from 'react';
import { Icon } from '../icons';

const TitlePath = () => [
  <path d="M5 4v3h5.5v12h3V7H19V4z" key='path0' />,
];

const TitleIcon = Icon.extend.attrs({
  children: TitlePath,
})``;

export default TitlePath;
export { TitleIcon };
