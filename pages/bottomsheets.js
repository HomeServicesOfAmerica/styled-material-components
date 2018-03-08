import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider, BottomSheet, Button } from '../src';

const PageContainer = styled.div`
  padding: 10px;
`;

export default class PortalPage extends Component {
  state = {
    modal: false,
    persistent: false
  };

  toggleModal = () => this.setState(prevState => ({
    modal: !prevState.modal
  }));

  togglePersistent = () => this.setState(prevState => ({
    persistent: !prevState.persistent
  }));

  render() {
    return (
      <ThemeProvider theme={{ primary: '#03A9F4' }}>
        <PageContainer>
          <h1>Modal Bottomsheet!</h1>
          <BottomSheet
            modal
            attachment="bottom"
            open={this.state.modal}
            handleRequestClose={this.toggleModal}>
            <p>{'Hi, I\'m a modal bottomsheet!'}</p>
          </BottomSheet>

          <Button raised primary onClick={this.toggleModal}>Toggle Modal</Button>

          <h1>Persistent Bottomsheet!</h1>
          <BottomSheet
            attachment="bottom"
            open={this.state.persistent}
            handleRequestClose={this.togglePersistent}>
            <p>{'Hi, I\'m a persistent bottomsheet!'}</p>
          </BottomSheet>
          <Button raised primary onClick={this.togglePersistent}>Toggle Persistent</Button>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
