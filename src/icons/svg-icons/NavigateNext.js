import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const NavigateNextPath = () => [
  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" key='path0' />,
];

const NavigateNextIcon = styled(Icon).attrs({
  children: NavigateNextPath,
})``;

export default NavigateNextPath;
export { NavigateNextIcon };
