import React from 'react';

import { Icon } from '../icons';

const SubdirectoryArrowLeftPath = () => [
  <path
    d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"
    key="path0"
  />,
];

const SubdirectoryArrowLeftIcon = Icon.extend.attrs({
  children: SubdirectoryArrowLeftPath,
})``;

export default SubdirectoryArrowLeftPath;
export { SubdirectoryArrowLeftIcon };
