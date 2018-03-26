import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { compose } from 'recompose';
import { withScreenSize } from '../contexts/ScreenSizeContext';

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

const multilineRollUp = keyframes`
  from {
    bottom: -80px;
  }
  to {
    bottom: 0px;
  }
`;

const multilineRollDown = keyframes`
  from {
    bottom: 0px;
  }
  to {
    bottom: -80px;
  }
`;

const Message = styled.div`
  position: relative;
  font-size: 14px;
  max-height: ${props => (props.mobile ? '32px' : '16px')};
  ${props => props.mobile && 'font-weight: 200'};
  ${props => !props.mobile && 'text-transform: uppercase'};
  overflow: hidden;
`;

const SnackbarWrapper = styled.div`
  animation: ${props => (props.animation ? `${props.animation} .3s linear` : 0)};
  bottom: ${(props) => {
    if (props.open && !props.animateOut) {
      return '0px';
    }
    return props.mobile && props.multiline ? '-80px' : '-48px';
  }};
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
      animation = this.props.mobile && this.props.multiline ? multilineRollUp : rollUp;
    } else if (this.state.animateOut) {
      animation = this.props.mobile && this.props.multiline ? multilineRollDown : rollDown;
    }
    return (
      <SnackbarWrapper
        className={`${this.props.className} smc-snackbar-container`}
        open={this.props.open}
        animation={animation}
        mobile={this.props.mobile}
      >
        <Message className="smc-snackbar-message" mobile={this.props.mobile}>
          {this.props.message || this.props.children}
        </Message>
      </SnackbarWrapper>
    );
  }
}

const Snackbar = styled(SnackbarComponent)`
  display: ${props => (props.open && !props.animateOut ? 'flex' : 'none')};
  position: fixed;
  left: ${props => (props.mobile ? 0 : '50%')};
  transform: ${props => !props.mobile && 'translateX(-50%)'};
  height: ${({ mobile, multiline }) => (mobile && multiline ? '80px' : '48px')};
  min-width: ${props => (props.mobile ? '100%' : '288px')};
  max-width: ${props => !props.mobile && '568px'};
  border-radius: 2px 2px 0 0;
  font-family: lato, sans-serif;
  background-color: #323232;
  color: #fff;
  padding: ${props => (props.mobile && props.multiline ? '24px' : '14px 24px')};
  box-sizing: border-box;
`;

const enhancer = compose(withScreenSize);

export default enhancer(({ className, children, ...props }, { screenSizeState }) => (
  <Snackbar {...props} mobile={['xs', 'sm'].includes(screenSizeState.screenSize)} />
));
