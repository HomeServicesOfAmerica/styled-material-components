import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const StopPath = () => [
  <path d="M6 6h12v12H6z" key='path0' />,
];

const StopIcon = styled(Icon).attrs({
  children: StopPath,
})``;

export default StopPath;
export { StopIcon };
