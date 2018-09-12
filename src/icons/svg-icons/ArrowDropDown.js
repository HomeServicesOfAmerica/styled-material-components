import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ArrowDropDownPath = () => [
  <path d="M7 10l5 5 5-5z" key='path0' />,
];

const ArrowDropDownIcon = styled(Icon).attrs({
  children: ArrowDropDownPath,
})``;

export default ArrowDropDownPath;
export { ArrowDropDownIcon };
