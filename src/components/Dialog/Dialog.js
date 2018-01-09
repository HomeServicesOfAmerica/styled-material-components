import React, { Component } from 'react';
import styled from 'styled-components';
import elevation from '../../mixins/elevation';
import { Portal } from '../Portal';

/*
 * The dialog is controlled by this.props.open, *but* the dialog also closes when
 * the user clicks out of it. Because of that, the dialog's open/shut status is
 * actually controlled in the DialogComponent's state
 */
class DialogComponent extends Component {
  state = {
    open: Boolean(this.props.open),
  };

  componentWillReceiveProps(nextProps) {
    const nextOpen = Boolean(nextProps.open);
    const prevOpen = Boolean(this.props.open);
    if (prevOpen !== nextOpen) return this.setState({ open: nextOpen });
    if (nextOpen && !this.state.open) this.openModal();
  }

  closeModal = () => this.setState({ open: false });

  openModal = () => this.setState({ open: true });

  stopPropagation = e => e.stopPropagation();

  renderContents = () => (
    <div className={`${this.props.className} smc-dialog`} onClick={this.closeModal}>
      <div className='smc-dialog-surface' onClick={this.stopPropagation}>
        {this.props.children}
      </div>
    </div>
  )

  render() {
    return (
      <Portal
        open={this.state.open}
        mode="overlay"
        renderContents={this.renderContents}
      />
    );
  }
}

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
