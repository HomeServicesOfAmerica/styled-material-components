import React from 'react';
import { Icon } from '../icons';

const Filter1Path = () => [
  <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" key='path0' />,
];

const Filter1Icon = Icon.extend.attrs({
  children: Filter1Path,
})``;

export default Filter1Path;
export { Filter1Icon };
