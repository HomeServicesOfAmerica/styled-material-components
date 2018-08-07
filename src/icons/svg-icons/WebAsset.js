import React from 'react';

import { Icon } from '../icons';

const WebAssetPath = () => [
  <path
    d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"
    key="path0"
  />,
];

const WebAssetIcon = Icon.extend.attrs({
  children: WebAssetPath,
})``;

export default WebAssetPath;
export { WebAssetIcon };
