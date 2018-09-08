import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const FastRewindPath = () => [
  <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" key='path0' />,
];

const FastRewindIcon = styled(Icon).attrs({
  children: FastRewindPath,
})``;

export default FastRewindPath;
export { FastRewindIcon };
