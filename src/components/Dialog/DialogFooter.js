// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type DialogFooterComponentPropsType = {
  children: Node,
  className: string,
};

const DialogFooterComponent = ({
  className,
  children,
}: DialogFooterComponentPropsType) => (
  <div className={`smc-dialog-dialog-footer ${className}`}>{children}</div>
);

const DialogFooter = styled(DialogFooterComponent)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export default DialogFooter;
