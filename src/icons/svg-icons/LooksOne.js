import React from 'react';
import { Icon } from '../icons';

const LooksOnePath = () => [
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" key='path0' />,
];

const LooksOneIcon = Icon.extend.attrs({
  children: LooksOnePath,
})``;

export default LooksOnePath;
export { LooksOneIcon };
