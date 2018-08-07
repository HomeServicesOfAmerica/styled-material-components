// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { ThemeProvider, BottomSheet, Button } from '../src';

const PageContainer = styled.div`
  padding: 10px;
`;

type PortalPagePropsType = {};

type PortalPageStateType = {|
  modal: boolean,
  persistent: boolean,
|};

export default class PortalPage extends Component<
  PortalPagePropsType,
  PortalPageStateType,
> {
  state = {
    modal: false,
    persistent: false,
  };

  toggleModal = (): void => {
    this.setState(({ modal }: PortalPageStateType) => ({
      modal: !modal,
    }));
  };

  togglePersistent = (): void => {
    this.setState(({ persistent }: PortalPageStateType) => ({
      persistent: !persistent,
    }));
  };

  render() {
    return (
      <ThemeProvider>
        <PageContainer>
          <h1>Modal Bottomsheet!</h1>
          <BottomSheet
            modal
            attachment="bottom"
            open={this.state.modal}
            handleRequestClose={this.toggleModal}
          >
            <p>{"Hi, I'm a modal bottomsheet!"}</p>
          </BottomSheet>

          <Button raised primary onClick={this.toggleModal}>
            Toggle Modal
          </Button>

          <h1>Persistent Bottomsheet!</h1>
          <BottomSheet
            attachment="bottom"
            open={this.state.persistent}
            handleRequestClose={this.togglePersistent}
          >
            <p>{"Hi, I'm a persistent bottomsheet!"}</p>
          </BottomSheet>
          <Button raised primary onClick={this.togglePersistent}>
            Toggle Persistent
          </Button>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
