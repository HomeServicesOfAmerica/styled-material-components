import React from 'react';
import { Icon } from '../icons';

const ListPath = () => [
  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" key='path0' />,
];

const ListIcon = Icon.extend.attrs({
  children: ListPath,
})``;

export default ListPath;
export { ListIcon };
