import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Overlay';
import { Shift } from './Shift';

let smcPortal;

export class Portal extends Component {
  defaultProps = {
    shift: false,
    direction: 'left',
  };

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
    this.el.className = 'smc-portal-instance';
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
    smcPortal && smcPortal.removeChild(this.el);
  }

  render() {
    if (!this.state.portalMounted) return null;
    const PortalContainer = this.props.shift ? Shift : Overlay;

    return createPortal(
      <PortalContainer
        className={this.props.className}
        direction={this.props.attachment}
        open={this.props.open}
        onClick={this.props.onRequestClose}>
        {this.props.renderContents()}
      </PortalContainer>,
      this.el,
    );
  }
}
