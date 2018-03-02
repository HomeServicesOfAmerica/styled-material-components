import React from 'react';
import styled from 'styled-components';

const RowComponent = ({ className, children }) => (
  <tr className={`smc-table-row ${className}`}>
    {children}
  </tr>
);

const Row = styled(RowComponent) `
  transition: 0.1s;
  ${({ header }) => !header && `
    &:hover {
      background-color: #eee;
    }
  `}
  ${({ selected }) => selected && `
    background-color: #F5F5F5;
`}
  height: ${({ header }) => (header ? 54 : 48)}px;
`;

export default Row;
