import React, { Component } from 'react';
import styled from 'styled-components';
// import MaterialThemeProvider from '../src/theme/ThemeProvider';
import {
  ThemeProvider,
  Toolbar,
  ToolbarTitle,
  Drawer,
  Button,
  CloseIcon,
  MenuIcon,
  Row,
  Column,
  /*
  MenuIcon,
  Navigation,
  NavigationItem
  */
} from '../../src';

import elevation from '../../src/mixins/elevation';

const PageContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 10px;
`;

const ScrollableFrame = styled.iframe`
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  outline: none;
  border: none;
  ${elevation(2)}
`;

export default class ToolbarPage extends Component {
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
      <ThemeProvider>
        <PageContainer>
          <Content>
            <h1>Toolbars</h1>
            <Row>
              <Column>
                <h2>Normal Toolbar</h2>
                <ScrollableFrame src="/toolbar/normal" />
              </Column>
              <Column>
                <h2>Fixed Toolbar</h2>
                <ScrollableFrame src="/toolbar/fixed" />
              </Column>
            </Row>
          </Content>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
