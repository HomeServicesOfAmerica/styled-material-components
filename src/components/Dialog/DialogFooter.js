import React from 'react';
import styled from 'styled-components';

const DialogFooterComponent = ({ className, children }) => (
  <div className={`smc-dialog-dialog-footer ${className}`}>
    {children}
  </div>
);

const DialogFooter = styled(DialogFooterComponent)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export default DialogFooter;
