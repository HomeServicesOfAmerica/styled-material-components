import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const WidgetsPath = () => [
  <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" key='path0' />,
];

const WidgetsIcon = styled(Icon).attrs({
  children: WidgetsPath,
})``;

export default WidgetsPath;
export { WidgetsIcon };
