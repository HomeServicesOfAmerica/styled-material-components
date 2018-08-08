import React from 'react';
import { Icon } from '../icons';

const Crop75Path = () => [
  <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" key='path0' />,
];

const Crop75Icon = Icon.extend.attrs({
  children: Crop75Path,
})``;

export default Crop75Path;
export { Crop75Icon };
