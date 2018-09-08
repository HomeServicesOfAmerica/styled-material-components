import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ExpandLessPath = () => [
  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" key='path0' />,
];

const ExpandLessIcon = styled(Icon).attrs({
  children: ExpandLessPath,
})``;

export default ExpandLessPath;
export { ExpandLessIcon };
