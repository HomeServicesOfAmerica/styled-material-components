import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const DehazePath = () => [
  <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" key='path0' />,
];

const DehazeIcon = styled(Icon).attrs({
  children: DehazePath,
})``;

export default DehazePath;
export { DehazeIcon };
