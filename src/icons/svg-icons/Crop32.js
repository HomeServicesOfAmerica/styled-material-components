import React from 'react';
import { Icon } from '../icons';

const Crop32Path = () => [
  <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" key='path0' />,
];

const Crop32Icon = Icon.extend.attrs({
  children: Crop32Path,
})``;

export default Crop32Path;
export { Crop32Icon };
