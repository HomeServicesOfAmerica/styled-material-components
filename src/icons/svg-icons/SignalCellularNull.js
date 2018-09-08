import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SignalCellularNullPath = () => [
  <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" key='path0' />,
];

const SignalCellularNullIcon = styled(Icon).attrs({
  children: SignalCellularNullPath,
})``;

export default SignalCellularNullPath;
export { SignalCellularNullIcon };
