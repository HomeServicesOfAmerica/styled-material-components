import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const VerticalAlignTopPath = () => [
  <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" key='path0' />,
];

const VerticalAlignTopIcon = styled(Icon).attrs({
  children: VerticalAlignTopPath,
})``;

export default VerticalAlignTopPath;
export { VerticalAlignTopIcon };
