import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ExpandMorePath = () => [
  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" key='path0' />,
];

const ExpandMoreIcon = styled(Icon).attrs({
  children: ExpandMorePath,
})``;

export default ExpandMorePath;
export { ExpandMoreIcon };
