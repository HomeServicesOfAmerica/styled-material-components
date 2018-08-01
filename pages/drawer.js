// @flow
import React, { Component } from "react";
import styled from "styled-components";

import { Drawer, ThemeProvider, Button } from "../src";

const PageContainer = styled.div`
  padding: 10px;
`;

type PortalPagePropsType = {||};
type PortalPageStateType = {|
  persistentLeft: boolean,
  persistentRight: boolean,
  temporaryLeft: boolean,
  temporaryRight: boolean
|};
export default class PortalPage extends Component<
  PortalPagePropsType,
  PortalPageStateType
> {
  state = {
    temporaryLeft: false,
    temporaryRight: false,
    persistentLeft: false,
    persistentRight: false
  };

  toggleTemporaryLeft = (): void => {
    this.setState(
      (prevState: PortalPageStateType): PortalPageStateType => ({
        ...prevState,
        temporaryLeft: !prevState.temporaryLeft
      })
    );
  };

  toggleTemporaryRight = (): void => {
    this.setState(
      (prevState: PortalPageStateType): PortalPageStateType => ({
        ...prevState,
        temporaryRight: !prevState.temporaryRight
      })
    );
  };

  togglePersistentLeft = (): void => {
    this.setState(
      (prevState: PortalPageStateType): PortalPageStateType => ({
        ...prevState,
        persistentLeft: !prevState.persistentLeft,
        persistentRight: false
      })
    );
  };

  togglePersistentRight = (): void => {
    this.setState(
      (prevState: PortalPageStateType): PortalPageStateType => ({
        ...prevState,
        persistentRight: !prevState.persistentRight,
        persistentLeft: false
      })
    );
  };

  render() {
    return (
      <ThemeProvider theme={{ primary: "#03A9F4" }}>
        <PageContainer>
          <h1>Temporary Drawers!</h1>
          <Drawer
            temporary
            attachment="left"
            open={this.state.temporaryLeft}
            handleRequestClose={this.toggleTemporaryLeft}
          >
            <p>{"Hi, im a temporary left attached drawer"}</p>
          </Drawer>
          <Drawer
            temporary
            attachment="right"
            open={this.state.temporaryRight}
            handleRequestClose={this.toggleTemporaryRight}
          >
            <p>{"Hi, im a temporary right attached drawer"}</p>
          </Drawer>
          <Button raised primary onClick={this.toggleTemporaryRight}>
            Right Temporary
          </Button>
          <Button raised accent onClick={this.toggleTemporaryLeft}>
            Left Temporary
          </Button>
          <h1>Persistent Drawers!</h1>
          <Drawer
            attachment="left"
            open={this.state.persistentLeft}
            handleRequestClose={this.togglePersistentLeft}
          >
            <p>{"Hi, im a persistent left attached drawer"}</p>
          </Drawer>
          <Drawer
            attachment="right"
            open={this.state.persistentRight}
            handleRequestClose={this.togglePersistentRight}
          >
            <p>{"Hi, im a persistent right attached drawer"}</p>
          </Drawer>
          <Button raised primary onClick={this.togglePersistentRight}>
            Right Persistent
          </Button>
          <Button raised accent onClick={this.togglePersistentLeft}>
            Left Persistent
          </Button>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
