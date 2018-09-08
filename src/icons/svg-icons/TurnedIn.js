import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const TurnedInPath = () => [
  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" key='path0' />,
];

const TurnedInIcon = styled(Icon).attrs({
  children: TurnedInPath,
})``;

export default TurnedInPath;
export { TurnedInIcon };
