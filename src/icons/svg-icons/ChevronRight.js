import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const ChevronRightPath = () => [
  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" key='path0' />,
];

const ChevronRightIcon = styled(Icon).attrs({
  children: ChevronRightPath,
});

export default ChevronRightPath;
export { ChevronRightIcon };
