import React from 'react';
import { Icon } from '../icons';

const ImportExportPath = () => [
  <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" key='path0' />,
];

const ImportExportIcon = Icon.extend.attrs({
  children: ImportExportPath,
})``;

export default ImportExportPath;
export { ImportExportIcon };
