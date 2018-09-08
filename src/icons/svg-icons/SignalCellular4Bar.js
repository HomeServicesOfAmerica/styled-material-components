import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SignalCellular4BarPath = () => [
  <path d="M2 22h20V2z" key='path0' />,
];

const SignalCellular4BarIcon = styled(Icon).attrs({
  children: SignalCellular4BarPath,
})``;

export default SignalCellular4BarPath;
export { SignalCellular4BarIcon };
