import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ErrorPath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" key='path0' />,
];

const ErrorIcon = styled(Icon).attrs({
  children: ErrorPath,
})``;

export default ErrorPath;
export { ErrorIcon };
