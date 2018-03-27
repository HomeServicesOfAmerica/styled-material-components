import React from 'react';
import { Icon } from '../icons';

const VerticalAlignTopPath = () => [
  <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" key='path0' />,
];

const VerticalAlignTopIcon = Icon.extend.attrs({
  children: VerticalAlignTopPath,
})``;

export default VerticalAlignTopPath;
export { VerticalAlignTopIcon };
