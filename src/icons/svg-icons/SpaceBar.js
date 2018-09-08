import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SpaceBarPath = () => [
  <path d="M18 9v4H6V9H4v6h16V9z" key='path0' />,
];

const SpaceBarIcon = styled(Icon).attrs({
  children: SpaceBarPath,
})``;

export default SpaceBarPath;
export { SpaceBarIcon };
