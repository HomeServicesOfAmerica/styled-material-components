import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const FunctionsPath = () => [
  <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" key='path0' />,
];

const FunctionsIcon = styled(Icon).attrs({
  children: FunctionsPath,
})``;

export default FunctionsPath;
export { FunctionsIcon };
