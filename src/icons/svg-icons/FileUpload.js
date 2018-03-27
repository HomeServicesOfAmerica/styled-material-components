import React from 'react';
import { Icon } from '../icons';

const FileUploadPath = () => [
  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" key='path0' />,
];

const FileUploadIcon = Icon.extend.attrs({
  children: FileUploadPath,
})``;

export default FileUploadPath;
export { FileUploadIcon };
