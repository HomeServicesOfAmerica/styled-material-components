import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ShortTextPath = () => [
  <path d="M4 9h16v2H4zm0 4h10v2H4z" key='path0' />,
];

const ShortTextIcon = styled(Icon).attrs({
  children: ShortTextPath,
})``;

export default ShortTextPath;
export { ShortTextIcon };
