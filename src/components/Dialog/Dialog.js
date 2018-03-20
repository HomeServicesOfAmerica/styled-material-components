import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import elevation from '../../mixins/elevation';
import { Portal } from '../Portal';

/*
 * The dialog is controlled by this.props.open, *but* the dialog also closes when
 * the user clicks out of it. Because of that, the dialog's open/shut status is
 * actually controlled in the DialogComponent's state
 */
const DialogComponent = (props) => {
  const fullscreenDialogClass = classNames(
    props.className, 'smc-fullscreen-dialog', {
      open: props.open,
      left: props.attachment === 'left',
      right: props.attachment === 'right',
    });

  return (
    <Portal
      open={props.open}
      renderContents={
        () => (
          <div className={`${props.className} smc-dialog`} onClick={props.onClose}>
            <div className={`smc-dialog-surface ${props.fullscreen && fullscreenDialogClass}`} onClick={e => e.stopPropagation()}>
              {props.children}
            </div>
          </div>
        )
      }
    />
  );
};

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
    ${({ fullscreen }) => !fullscreen && `
      width: 70%;
      max-width: 865px
      ${elevation(24)};
    `};
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

    &.open {
      transition: transform 0.3s;
      transform: none;
    }
  }
`;

DialogComponent.defaultProps = {
  open: false,
  attachment: 'left',
};
