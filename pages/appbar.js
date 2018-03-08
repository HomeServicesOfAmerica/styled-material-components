import React, { Component } from 'react';
import styled from 'styled-components';
// import MaterialThemeProvider from '../src/theme/ThemeProvider';
import {
  ThemeProvider,
  Appbar,
  AppbarTitle,
  Drawer,
  Button,
  CloseIcon,
  /*
  MenuIcon,
  Navigation,
  NavigationItem
  */
} from '../src';

const PageContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 10px;
`;

const Icon = styled(CloseIcon).attrs({
  fill: 'white',
})`
  width: 24px;
  padding: 8px 8px 8px 0;
  cursor: pointer;
  text-align: center;
`;

export default class AppbarPage extends Component {
  state = {
    persistentRight: false,
    temporaryRight: false,
    mainNav: 'test1',
    denseNav: 'test4',
    doubleNav: 'test7',
  };

  toggleTemporaryRight = () => this.setState(prevState => ({
    persistentRight: !prevState.persistentRight ? true : prevState.persistentRight,
    temporaryRight: !prevState.temporaryRight,
  }));

  togglePersistentRight = () => this.setState(prevState => ({
    persistentRight: !prevState.persistentRight,
    temporaryRight: false,
  }));

  closeIcon = () => (
    <a onClick={this.togglePersistentRight} className={`closeIcon`}>
      x
    </a>
  );

  setMainNav = mainNav => this.setState({ mainNav });
  setDenseNav = denseNav => this.setState({ denseNav });
  setDoubleNav = doubleNav => this.setState({ doubleNav });

  render() {
    return (
      <ThemeProvider theme={{ primary: '#03A9F4' }}>
        <PageContainer>
          {!this.state.persistentRight
            ? <Appbar>
              <AppbarTitle>This is a title</AppbarTitle>
            </Appbar>
            : <span />
          }
          <Content>
            <h1>Appbars</h1>
            <h2>Appbar in a drawer</h2>
            <Drawer
              attachment='right'
              open={this.state.persistentRight}
              handleRequestClose={this.togglePersistentRight}>
              <Appbar>
                <AppbarTitle Icon={Icon} onIconClick={this.togglePersistentRight}>
                  {`<- Click Me`}
                </AppbarTitle>
              </Appbar>
              <p>I am a <b>persistent</b> drawer!</p>
            </Drawer>
            <Drawer
              temporary
              attachment='right'
              open={this.state.temporaryRight}
              handleRequestClose={this.toggleTemporaryRight}>
              <Appbar>
                <AppbarTitle>I am in this drawer!</AppbarTitle>
              </Appbar>
              <p>I am a <b>temporary</b> drawer!</p>
            </Drawer>
            <Button
              raised
              primary
              onClick={this.togglePersistentRight}
            >
              Launch Permanent Drawer
            </Button>
            <Button
              raised
              accent
              onClick={this.toggleTemporaryRight}
            >
              Launch Temporary Drawer
            </Button>
            {/* Broken for now
            <h2>Appbar with navigation</h2>
            <Appbar>
              <AppbarTitle>Navigation</AppbarTitle>
              <Navigation active={this.state.mainNav}>
                <NavigationItem onClick={() => this.setMainNav('test1')} navKey="test1">
                  <p>Test</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setMainNav('test2')} navKey="test2">
                  <p>Components</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setMainNav('test3')} navKey="test3">
                  <p>Themes</p>
                </NavigationItem>
              </Navigation>
            </Appbar>
              <h2>Dense Appbar</h2>
            <Appbar dense>
              <AppbarTitle>Navigation</AppbarTitle>
              <Navigation active={this.state.denseNav}>
                <NavigationItem onClick={() => this.setDenseNav('test4')} navKey="test4">
                  <p>Test</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setDenseNav('test5')} navKey="test5">
                  <p>Components</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setDenseNav('test6')} navKey="test6">
                  <p>Themes</p>
                </NavigationItem>
              </Navigation>
            </Appbar>
            <h2>Double Appbar</h2>
            <Appbar title='Navigation' dense double>
              <Navigation active={this.state.doubleNav}>
                <NavigationItem onClick={() => this.setDoubleNav('test7')} navKey="test7">
                  <p>Test</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setDoubleNav('test8')} navKey="test8">
                  <p>Components</p>
                </NavigationItem>
                <NavigationItem onClick={() => this.setDoubleNav('test9')} navKey="test9">
                  <p>Themes</p>
                </NavigationItem>
              </Navigation>
            </Appbar>
            */}
          </Content>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
