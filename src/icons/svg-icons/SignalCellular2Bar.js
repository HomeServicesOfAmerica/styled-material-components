import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SignalCellular2BarPath = () => [
  <path fillOpacity=".3" d="M2 22h20V2z" key='path0' />,
  <path d="M14 10L2 22h12z" key='path1' />,
];

const SignalCellular2BarIcon = styled(Icon).attrs({
  children: SignalCellular2BarPath,
})``;

export default SignalCellular2BarPath;
export { SignalCellular2BarIcon };
