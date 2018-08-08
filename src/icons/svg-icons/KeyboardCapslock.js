import React from 'react';
import { Icon } from '../icons';

const KeyboardCapslockPath = () => [
  <path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" key='path0' />,
];

const KeyboardCapslockIcon = Icon.extend.attrs({
  children: KeyboardCapslockPath,
})``;

export default KeyboardCapslockPath;
export { KeyboardCapslockIcon };
