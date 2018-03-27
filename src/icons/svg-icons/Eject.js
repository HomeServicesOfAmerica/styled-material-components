import React from 'react';
import { Icon } from '../icons';

const EjectPath = () => [
  <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" key='path0' />,
];

const EjectIcon = Icon.extend.attrs({
  children: EjectPath,
})``;

export default EjectPath;
export { EjectIcon };
