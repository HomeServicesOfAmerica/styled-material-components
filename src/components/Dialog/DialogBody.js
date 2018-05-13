// @flow
import React, { type Node } from "react";
import styled from "styled-components";

type DialogBodyComponentPropsType = {
  children: Node,
  className: string
};
const DialogBodyComponent = ({
  className,
  children
}: DialogBodyComponentPropsType) => (
  <div className={`smc-dialog-dialog-body ${className}`}>{children}</div>
);

const DialogBody = styled(DialogBodyComponent)`
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.56px;
  line-height: 20px;
  display: block;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 20px;
  padding: 0 24px 24px;
`;

export default DialogBody;
