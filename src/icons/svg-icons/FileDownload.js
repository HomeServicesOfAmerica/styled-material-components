import React from 'react';
import { Icon } from '../icons';

const FileDownloadPath = () => [
  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" key='path0' />,
];

const FileDownloadIcon = Icon.extend.attrs({
  children: FileDownloadPath,
})``;

export default FileDownloadPath;
export { FileDownloadIcon };
