import React from 'react';
import styled from 'styled-components';

const DatumComponent = ({ children, className, column }) => (
  children ? <td className={`smc-table-datum ${className} smc-table-datum-${column}`}>
    {children}
  </td> : null
);

const Datum = styled(DatumComponent) `
  padding: 0 24px;
  font-size: 12px;
  color: ${props => props.theme.textColors.primary};
  text-align: ${({ numerical }) => (numerical ? 'right' : 'left')};
  padding-left: ${({ first }) => (first ? 24 : 56)}px;
  padding-right: ${({ last }) => (last ? 24 : 0)}px;
`;

export default Datum;
