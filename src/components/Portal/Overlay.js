import React from 'react';
import styled from 'styled-components';

// This prevents clicks on the contents of the portal from dismissing the portal
const stopPropagation = e => e.stopPropagation();

export const BaseOverlay = props => (
  <div className={`${props.className} smc-overlay`} onClick={props.onClick}>
    <div className="smc-portal-content" onClick={stopPropagation}>{props.children}</div>
  </div>
);

export const Overlay = styled(BaseOverlay)`
  background: rgba(0, 0, 0, .6);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);
  will-change: opacity;
  pointer-events: ${props => (props.open ? 'inherit' : 'none')};
  contain: strict;
  overflow: hidden;
  z-index: 4;
`;
