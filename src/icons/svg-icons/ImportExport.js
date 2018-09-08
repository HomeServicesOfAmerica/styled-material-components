import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const importExportPath = () => [
  <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" key='path0' />,
];

export const ImportExportIcon = styled(Icon).attrs({
  children: importExportPath,
})``;

export default importExportPath;
