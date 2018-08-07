// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type DialogTitleComponentPropsType = {
  children: Node,
  className: string,
};

const DialogTitleComponent = ({
  className,
  children,
}: DialogTitleComponentPropsType) => (
  <h2 className={`smc-dialog-dialog-title ${className}`}>{children}</h2>
);

const DialogTitle = styled(DialogTitleComponent)`
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.4px;
  line-height: 32px;
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  padding: 24px 24px 0;
  margin: 0px;
`;

export default DialogTitle;
