import React from 'react';
import { Icon } from '../icons';

const VerifiedUserPath = () => [
  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" key='path0' />,
];

const VerifiedUserIcon = Icon.extend.attrs({
  children: VerifiedUserPath,
})``;

export default VerifiedUserPath;
export { VerifiedUserIcon };
