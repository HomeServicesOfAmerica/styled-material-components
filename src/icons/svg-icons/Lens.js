import React from 'react';
import { Icon } from '../icons';

const LensPath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" key='path0' />,
];

const LensIcon = Icon.extend.attrs({
  children: LensPath,
})``;

export default LensPath;
export { LensIcon };
