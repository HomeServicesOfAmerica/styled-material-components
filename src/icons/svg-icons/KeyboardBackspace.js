import React from 'react';
import { Icon } from '../icons';

const KeyboardBackspacePath = () => [
  <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" key='path0' />,
];

const KeyboardBackspaceIcon = Icon.extend.attrs({
  children: KeyboardBackspacePath,
})``;

export default KeyboardBackspacePath;
export { KeyboardBackspaceIcon };
