import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const KeyboardArrowDownPath = () => [
  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" key='path0' />,
];

const KeyboardArrowDownIcon = styled(Icon).attrs({
  children: KeyboardArrowDownPath,
});

export default KeyboardArrowDownPath;
export { KeyboardArrowDownIcon };
