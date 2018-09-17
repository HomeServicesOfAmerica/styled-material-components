import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import elevation from '../../mixins/elevation';
import { Portal } from '../Portal/index.js';

/*
 * The dialog is controlled by this.props.open, *but* the dialog also closes when
 * the user clicks out of it. Because of that, the dialog's open/shut status is
 * actually controlled in the DialogComponent's state
 */
class DialogComponent extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('touchstart', this.handleOutsideClick);
  }

  dialog = React.createRef();

  handleOutsideClick = (event) => {
    if (this.dialog.current && this.dialog.current.contains(event.target)) return;
    this.props.closeOnOutsideClick && this.props.closeOnOutsideClick();
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // esc
      this.props.onClose && this.props.onClose();
    }
  };
  render() {
    const fullscreenDialogClass = classNames(this.props.className, 'smc-fullscreen-dialog', {
      open: this.props.open,
      left: this.props.attachment === 'left',
      right: this.props.attachment === 'right',
      top: this.props.attachment === 'top',
      bottom: this.props.attachment === 'bottom',
    });

    return (
      <Portal
        open={this.props.open}
        renderContents={() => (
          <div
            className={`${this.props.className} smc-dialog`}
            onClick={this.props.onClose}
            onKeyDown={this.handleKeyDown}
          >
            <div
              className={`smc-dialog-surface ${this.props.fullscreen ? fullscreenDialogClass : ''}`}
              onClick={e => e.stopPropagation()}
            >
              {this.props.children}
            </div>
          </div>
        )}
      />
    );
  }
}

const notFullScreenStyles = css`
  width: ${({ width }) => {
    if (typeof width === 'number') return `${width}px`;
    return width || '70%';
  }};
  max-width: 865px;
  ${elevation(24)};
`;

export default styled(DialogComponent)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > .smc-dialog-surface {
    display: flex;
    flex-direction: column;
    ${({ fullscreen }) => !fullscreen && notFullScreenStyles};
    border-radius: 2px;
    background-color: #fff;
  }

  > .smc-fullscreen-dialog {
    overflow: hidden;
    transition: transform 0.3s;
    will-change: transform;

    &.left {
      left: 0;
      transform: translateX(-107%);
    }

    &.right {
      right: 0;
      transform: translateX(107%);
    }

    &.top {
      top: 0;
      transform: translateY(-107%);
    }

    &.bottom {
      bottom: 0;
      transform: translateY(107%);
    }

    &.open {
      transition: transform 0.3s;
      transform: none;
    }
  }
`;

DialogComponent.defaultProps = {
  open: false,
  attachment: 'left',
  fullscreen: false,
};
