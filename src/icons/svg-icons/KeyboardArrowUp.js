import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const KeyboardArrowUpPath = () => [
  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" key='path0' />,
];

const KeyboardArrowUpIcon = styled(Icon).attrs({
  children: KeyboardArrowUpPath,
})``;

export default KeyboardArrowUpPath;
export { KeyboardArrowUpIcon };
