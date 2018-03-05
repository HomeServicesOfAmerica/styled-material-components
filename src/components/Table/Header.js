import React from 'react';
import styled from 'styled-components';

const HeaderComponent = ({ children, className }) => (
  <div className={`smc-table-header ${className}`}>
    {children}
  </div>
);

const Header = styled(HeaderComponent) `
  font-size: 20px;
  color: ${props => props.theme.textColors.primary};
  text-align: left;
  line-height: 64px;
`;

export default Header;
