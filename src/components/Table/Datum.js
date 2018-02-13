import React from 'react';
import styled from 'styled-components';

const DatumComponent = ({ children, className, column }) => (
  <td className={`smc-table-datum ${className} smc-table-datum-${column}`}>
    {children}
  </td>
);

const Datum = styled(DatumComponent)`
  font-size: 12px;
  color: rgba(0, 0, 0, .87);
  border-bottom: 1px solid rgba(0, 0, 0, .54);
  text-align: ${({ numerical }) => (numerical ? 'right' : 'left')};
  padding-left: ${({ first }) => (first ? 24 : 56)}px;
  padding-right: ${({ last }) => (last ? 24 : 0)}px;
`;

export default Datum;
