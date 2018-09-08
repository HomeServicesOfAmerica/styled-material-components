import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const DashboardPath = () => [
  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" key='path0' />,
];

const DashboardIcon = styled(Icon).attrs({
  children: DashboardPath,
})``;

export default DashboardPath;
export { DashboardIcon };
