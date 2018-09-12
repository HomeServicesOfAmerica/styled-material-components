import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ArrowDropUpPath = () => [
  <path d="M7 14l5-5 5 5z" key='path0' />,
];

const ArrowDropUpIcon = styled(Icon).attrs({
  children: ArrowDropUpPath,
})``;

export default ArrowDropUpPath;
export { ArrowDropUpIcon };
