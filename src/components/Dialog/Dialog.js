import React from 'react';
import styled from 'styled-components';
import elevation from '../../mixins/elevation';
import { Portal } from '../Portal';

/*
 * The dialog is controlled by this.props.open, *but* the dialog also closes when
 * the user clicks out of it. Because of that, the dialog's open/shut status is
 * actually controlled in the DialogComponent's state
 */
const DialogComponent = props => (
  <Portal
    open={props.open}
    mode="overlay"
    renderContents={
      () => (
        <div className={`${props.className} smc-dialog`} onClick={props.onClose}>
          <div className='smc-dialog-surface' onClick={e => e.stopPropagation()}>
            {props.children}
          </div>
        </div>
      )
    }
  />
);

export default styled(DialogComponent)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  > .smc-dialog-surface {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 865px;
    border-radius: 2px;
    background-color: #fff;
    ${elevation(24)};
  }
`;
