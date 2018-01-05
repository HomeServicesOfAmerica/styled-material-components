import React from 'react';
import styled from 'styled-components';

const RowComponent = ({ className, children }) => (
  <tr className={`smc-table-row ${className}`}>
    {children}
  </tr>
);

const Row = styled(RowComponent)`
  height: ${({ header }) => header ? 54 : 48}px;
`;

export default Row;
