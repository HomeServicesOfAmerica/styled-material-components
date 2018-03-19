import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const rollUp = keyframes`
  from {
    bottom: -48px;
  }
  to {
    bottom: 0px;
  }
`;

const rollDown = keyframes`
  from {
    bottom: 0px;
  }
  to {
    bottom: -48px;
  }
`;

const Message = styled.div`
  padding: 0 24px;
  position: relative;
  top: calc(50% - 8px);
  font-size: 14px;
  text-transform: uppercase;
`;

const SnackbarWrapper = styled.div`
  animation: ${props => (props.animation ? `${props.animation} .3s linear` : 0)};
  bottom: ${props => (props.open && !props.animateOut ? '0px' : '-48px')};
`;

class SnackbarComponent extends PureComponent {
  state = {
    animateOut: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open && !this.props.open) {
      if (this.delayedCloseTimer) {
        clearTimeout(this.delayedCloseTimer);
        this.delayedCloseTimer = null;
      }

      this.delayedCloseTimer = setTimeout(() => {
        // start auto-dismissal counter after snackbar is opened
        this.setState({ animateOut: true });
        // run onRequestClose, delayed by animation timing
        setTimeout(this.props.onRequestClose, 300);
      }, this.props.autoHideDuration || 4000);
    } else {
      this.setState({ animateOut: false });
    }
  }

  render() {
    let animation = null;
    if (this.props.open && !this.state.animateOut) {
      animation = rollUp;
    } else if (this.state.animateOut) {
      animation = rollDown;
    }
    return (
      <SnackbarWrapper
        className={`${this.props.className} smc-snackbar-container`}
        open={this.props.open}
        animation={animation}>
        <Message className="smc-snackbar-message">
          {this.props.message || this.props.children}
        </Message>
      </SnackbarWrapper>
    );
  }
}

const Snackbar = styled(SnackbarComponent)`
  display: ${props => (props.open && !props.animateOut ? 'flex' : 'none')};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  min-width: 288px;
  max-width: 568px;
  border-radius: 2px 2px 0 0;
  font-family: lato, sans-serif;
  background-color: #323232;
  color: #fff;
`;


export default Snackbar;
