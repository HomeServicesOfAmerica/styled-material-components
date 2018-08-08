import React from 'react';
import styled, { injectGlobal, css } from 'styled-components';
import classNames from 'classnames';
import elevation from '../mixins/elevation';
import { Portal } from '../components/Portal';

const drawerSizing = css`
  width: 240px;
`;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    &.shift {
      &.right {
        &:after {
          content: "";
          ${drawerSizing}
          display: inline-table;
          box-sizing: border-box;
        }
      }
      &.left {
        &:before {
          content: "";
          ${drawerSizing}
          display: inline-table;
          box-sizing: border-box;
        }
      }
    }
  }
`;

const BaseDrawer = (props) => {
  const drawerClass = classNames({
    [props.className]: true,
    open: props.open,
    left: props.attachment === 'left',
    right: props.attachment === 'right',
    'smc-drawer': true,
  });
  return (
    <aside className={drawerClass}>
      {props.children}
    </aside>
  );
};

const StyledDrawer = styled(BaseDrawer)`
  background-color: white;
  ${props => props.temporary && elevation(16)}
  bottom: 0;
  top: 0;
  overflow: hidden;
  position: absolute;
  transition: transform .195s;
  ${drawerSizing}
  will-change: transform;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  touch-action: none;
  ${props => props.temporary && `
    width: 320px;
    z-index: 5
  `};

  &.left {
    left: 0;
    transform: translateX(-107%);
    ${props => !props.temporary && `border-right: 1px solid rgba(0,0,0,0.35);`}
  }

  &.right {
    right: 0;
    transform: translateX(107%);
    ${props => !props.temporary && `
      border-left: 1px solid rgba(0,0,0,0.35);
    `};
  }

  &.open {
    transition: transform .225s;
    transform: none;
  }
`;

export const Drawer = ({
  open,
  children,
  handleRequestClose,
  temporary,
  attachment,
}) => (
  <Portal
    open={open}
    shift={!temporary}
    attachment={attachment}
    onRequestClose={handleRequestClose}
    renderContents={() => (
      <StyledDrawer
        attachment={attachment}
        open={open}
        temporary={temporary}
      >
        {children}
      </StyledDrawer>
    )} />
);

Drawer.defaultProps = {
  temporary: false,
  open: false,
  attachment: 'left',
  handleRequestClose: () => {},
};

export default Drawer;
