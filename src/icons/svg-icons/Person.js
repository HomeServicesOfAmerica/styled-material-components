import React from 'react';
import { Icon } from '../icons';

const PersonPath = () => [
  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" key='path0' />,
];

const PersonIcon = Icon.extend.attrs({
  children: PersonPath,
})``;

export default PersonPath;
export { PersonIcon };
