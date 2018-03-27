import React from 'react';
import { Icon } from '../icons';

const PowerInputPath = () => [
  <path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" key='path0' />,
];

const PowerInputIcon = Icon.extend.attrs({
  children: PowerInputPath,
})``;

export default PowerInputPath;
export { PowerInputIcon };
