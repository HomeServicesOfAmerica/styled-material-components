import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const CallReceivedPath = () => [
  <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" key='path0' />,
];

const CallReceivedIcon = styled(Icon).attrs({
  children: CallReceivedPath,
})``;

export default CallReceivedPath;
export { CallReceivedIcon };
