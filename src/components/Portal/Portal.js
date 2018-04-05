import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Overlay';
import { Shift } from './Shift';

let smcPortal;

export class Portal extends Component {
  static defaultProps = {
    shift: false,
    direction: 'left',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open && !prevState.open) {
      // if user has set a body style grabbing it here
      // so we don't override what they were using
      const overflowStyle = document.body.style.overflowY;
      document.body.style.overflowY = 'hidden';
      return { open: nextProps.open, overflowY: overflowStyle };
    } else if (!nextProps.open && prevState.open) {
      document.body.style.overflowY = prevState.overflowY;
      return { open: nextProps.open };
    }
  }

  state = {
    portalMounted: false,
    open: false,
    overflowY: '',
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
    console.log('hit render');
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
