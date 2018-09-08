import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const WarningPath = () => [
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" key='path0' />,
];

const WarningIcon = styled(Icon).attrs({
  children: WarningPath,
})``;

export default WarningPath;
export { WarningIcon };
