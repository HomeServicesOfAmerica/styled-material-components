import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SignalCellular3BarPath = () => [
  <path fillOpacity=".3" d="M2 22h20V2z" key='path0' />,
  <path d="M17 7L2 22h15z" key='path1' />,
];

const SignalCellular3BarIcon = styled(Icon).attrs({
  children: SignalCellular3BarPath,
})``;

export default SignalCellular3BarPath;
export { SignalCellular3BarIcon };
