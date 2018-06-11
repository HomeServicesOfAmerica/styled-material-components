import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const DesktopMacPath = () => [
  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" key='path0' />,
];

const DesktopMacIcon = styled(Icon).attrs({
  children: DesktopMacPath,
});

export default DesktopMacPath;
export { DesktopMacIcon };
