import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const PriorityHighPath = () => [
  <path d="M10 3h4v12h-4z" key='path0' />,
];

const PriorityHighIcon = styled(Icon).attrs({
  children: PriorityHighPath,
})``;

export default PriorityHighPath;
export { PriorityHighIcon };
