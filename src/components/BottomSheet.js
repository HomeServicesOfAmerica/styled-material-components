// @flow
import React, { type Node } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";

import elevation from "../mixins/elevation";
import { Portal } from "./Portal";

export type BottomSheetProps = {|
  attachment: string,
  children: Node,
  className: string, // TODO enum
  handleRequestClose: () => any,
  modal: boolean,
  open: boolean
|};

const bottomSheetSizing = css`
  height: 0;
  bottom: 5;
`;

const BaseBottomSheet = (props: BottomSheetProps & { className: string }) => {
  const bottomSheetClass = classNames({
    [props.className]: true,
    open: props.open,
    bottom: props.attachment === "bottom",
    "smc-bottomsheet": true
  });
  return <aside className={bottomSheetClass}>{props.children}</aside>;
};

const StyledBottomSheet = styled(BaseBottomSheet)`
  background-color: white;
  ${props => props.modal && elevation(16)} left: 0;
  right: 0;
  overflow: hidden;
  position: fixed;
  transition: transform 0.195s;
  ${bottomSheetSizing} will-change: transform;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  touch-action: none;
  ${props => props.modal && `z-index: 5`} &.bottom {
    transform: translateY(100%);
    ${props => !props.modal && `border-top: 1px solid rgba(0,0,0,0.35);`};
  }

  &.open {
    bottom: 0;
    height: calc(100% - 56px);
    max-height: 200px;
    width: 100%;
    @media (min-width: 600px) {
      height: calc(100% - 64px);
      max-height: 200px;
    }
    transition: transform 0.225s;
    transform: none;
  }
`;

export const BottomSheet = ({
  className,
  open,
  children,
  handleRequestClose,
  modal,
  attachment
}: BottomSheetProps) => (
  <Portal
    open={open}
    shift={!modal}
    attachment={attachment}
    onRequestClose={handleRequestClose}
    renderContents={() => (
      <StyledBottomSheet
        className={className}
        attachment={attachment}
        open={open}
      >
        {children}
      </StyledBottomSheet>
    )}
  />
);

BottomSheet.defaultProps = {
  modal: false,
  open: false,
  attachment: "bottom",
  handleRequestClose: () => {}
};

export default BottomSheet;
