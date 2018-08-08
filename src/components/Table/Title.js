import React from 'react';
import styled from 'styled-components';

const TitleComponent = ({ children, className, column }) => (
  <th className={`smc-table-title ${className} smc-table-title-${column}`}>
    {children}
  </th>
);

const Title = styled(TitleComponent) `
  font-size: 13px;
  color: ${props =>
    (props.sortedBy
      ? props.theme.textColors.primary
      : props.theme.textColors.secondary)};
  text-align: ${({ numerical }) => (numerical ? 'right' : 'left')};
  padding-left: ${({ first }) => (first ? 24 : 56)}px;
  padding-right: ${({ last }) => (last ? 24 : 0)}px;
`;

export default Title;
