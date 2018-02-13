import React from 'react';
import styled from 'styled-components';

const HeaderComponent = ({ children, className }) => (
  <div className={`smc-table-header ${className}`}>
    {children}
  </div>
);

const Header = styled(HeaderComponent)`
  font-size: 20px;
  color: rgba(0, 0, 0, .87);
  text-align: left;
  line-height: 64px;
`;

export default Header;
