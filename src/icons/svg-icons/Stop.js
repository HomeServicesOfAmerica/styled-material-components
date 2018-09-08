import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const StopPath = () => [
  <path d="M6 6h12v12H6z" key='path0' />,
];

const StopIcon = styled(Icon).attrs({
  children: StopPath,
})``;

export default StopPath;
export { StopIcon };
