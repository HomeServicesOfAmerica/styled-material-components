import React from 'react';

import { Icon } from '../icons';

const TerrainPath = () => [
  <path
    d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"
    key="path0"
  />,
];

const TerrainIcon = Icon.extend.attrs({
  children: TerrainPath,
})``;

export default TerrainPath;
export { TerrainIcon };
