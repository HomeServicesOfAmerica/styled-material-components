import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SwapVertPath = () => [
  <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" key='path0' />,
];

const SwapVertIcon = styled(Icon).attrs({
  children: SwapVertPath,
})``;

export default SwapVertPath;
export { SwapVertIcon };
