import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const FastForwardPath = () => [
  <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" key='path0' />,
];

const FastForwardIcon = styled(Icon).attrs({
  children: FastForwardPath,
});

export default FastForwardPath;
export { FastForwardIcon };
