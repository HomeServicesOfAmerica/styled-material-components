import React from 'react';
import { Icon } from '../icons';

const MenuPath = () => [
  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" key='path0' />,
];

const MenuIcon = Icon.extend.attrs({
  children: MenuPath,
})``;

export default MenuPath;
export { MenuIcon };
