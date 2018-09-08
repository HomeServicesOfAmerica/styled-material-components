import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const PausePath = () => [
  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" key='path0' />,
];

const PauseIcon = styled(Icon).attrs({
  children: PausePath,
})``;

export default PausePath;
export { PauseIcon };
