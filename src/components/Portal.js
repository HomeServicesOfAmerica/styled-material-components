import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

let smcPortal;

const stopPropagation = e => e.stopPropagation();

const BaseOverlay = props => (
  <div className={`${props.className} smc-overlay`} onClick={props.onClick}>
    <div className="smc-overlay-content" onClick={stopPropagation}>
      {props.children}
    </div>
  </div>
);

const Overlay = styled(BaseOverlay)`
  background-color: ${props => (props.showOverlay ? 'rgba(0,0,0,0.25)' : 'transparent')};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: background-color 0.15s linear;
`;

export class Portal extends Component {
  state = {
    portalMounted: false,
  };

  componentDidMount() {
    if (!smcPortal) {
      smcPortal = document.createElement('div');
      smcPortal.id = 'smc-portal';
      smcPortal.className = 'smc-portal';
      document.body.appendChild(smcPortal);
    }
    this.el = document.createElement('div');
    this.el.className = 'smc-portal-content';
    smcPortal.appendChild(this.el);
    // Triggering a re-render is purposeful because of the nature
    // of portals. The first render and componentDidMount will happen
    // at the same time. this.el can be undefined at render. So
    // we call this.setState in componentDidMount after this.el has
    // been defined and the dom node has been inserted.
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      portalMounted: true,
    });
  }

  componentWillUnmount() {
    smcPortal.removeChild(this.el);
  }

  render() {
    if (!this.state.portalMounted) return null;
    return createPortal(
      <Overlay showOverlay={this.props.showOverlay} onClick={this.props.onRequestClose}>
        {this.props.renderContents()}
      </Overlay>,
      this.el,
    );
  }
}
