import React from 'react';
import { Icon } from '../icons';

const SwapVertPath = () => [
  <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" key='path0' />,
];

const SwapVertIcon = Icon.extend.attrs({
  children: SwapVertPath,
})``;

export default SwapVertPath;
export { SwapVertIcon };
