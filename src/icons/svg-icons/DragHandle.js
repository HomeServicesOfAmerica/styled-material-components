import React from 'react';
import { Icon } from '../icons';

const DragHandlePath = () => [
  <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" key='path0' />,
];

const DragHandleIcon = Icon.extend.attrs({
  children: DragHandlePath,
})``;

export default DragHandlePath;
export { DragHandleIcon };
