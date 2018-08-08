import React from 'react';
import { Icon } from '../icons';

const SubdirectoryArrowRightPath = () => [
  <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" key='path0' />,
];

const SubdirectoryArrowRightIcon = Icon.extend.attrs({
  children: SubdirectoryArrowRightPath,
})``;

export default SubdirectoryArrowRightPath;
export { SubdirectoryArrowRightIcon };
