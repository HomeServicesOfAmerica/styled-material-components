import React from 'react';
import { Icon } from '../icons';

const NavigationPath = () => [
  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" key='path0' />,
];

const NavigationIcon = Icon.extend.attrs({
  children: NavigationPath,
})``;

export default NavigationPath;
export { NavigationIcon };
