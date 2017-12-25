import React from 'react';
import styled from 'styled-components';
import elevation from '../mixins/elevation';
import { Portal } from '../components/Portal';

const BaseSidebar = props => (
  <aside className={`${props.className} ${props.open ? 'open' : ''} smc-drawer`}>
    {props.children}
  </aside>
);

const Sidebar = styled(BaseSidebar)`
  background-color: white;
  width: 200px;
  ${elevation(16)}
  border-right: 1px solid rgba(0,0,0,0.35);
  bottom: 0;
  top: 0;
  left: -200px;
  overflow: hidden;
  position: absolute;
  transition: left .195s;

  &.open {
    left: 0px;
  }
`;

export const Drawer = ({
  open,
  children,
  handleRequestClose,
  temporary,
}) => (
  <Portal
    showOverlay={temporary && open}
    onRequestClose={handleRequestClose}
    renderContents={() => (
      <Sidebar open={open}>
        {children}
      </Sidebar>
    )} />
);

Drawer.defaultProps = {
  temporary: true,
  open: false,
  handleRequestClose: () => {},
};

