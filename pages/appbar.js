import React, { Component } from 'react';
import styled from 'styled-components';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import { Drawer } from '../src/components/Drawer';
import Button from '../src/components/Button';
import Appbar from '../src/components/Appbar';

const PageContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 10px;
`;

export default class AppbarPage extends Component {
  state = {
    persistentRight: false,
  };

  togglePersistentRight = () => this.setState(prevState => ({
    persistentRight: !prevState.persistentRight,
    persistentLeft: false,
  }));


  render() {
    return (
      <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
        <PageContainer>
          {!this.state.persistentRight ? <Appbar title='This is a title!' /> : <span />}
          <Content>
            <h1>Appbars</h1>
            <h2>Appbar in a drawer</h2>
            <Drawer
              attachment="right"
              open={this.state.persistentRight}
              handleRequestClose={this.togglePersistentRight}>
              <Appbar title='I am in this drawer!' />
              <p>{'hello!'}</p>
            </Drawer>
            <Button
              raised
              primary
              onClick={this.togglePersistentRight}
            >
              Launch Appbar Drawer
            </Button>
          </Content>
        </PageContainer>
      </MaterialThemeProvider>
    );
  }
}

