import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const SignalCellular0BarPath = () => [
  <path fillOpacity=".3" d="M2 22h20V2z" key='path0' />,
];

const SignalCellular0BarIcon = styled(Icon).attrs({
  children: SignalCellular0BarPath,
});

export default SignalCellular0BarPath;
export { SignalCellular0BarIcon };
