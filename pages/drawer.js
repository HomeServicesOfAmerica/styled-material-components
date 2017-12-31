import React, { Component, Fragment } from 'react';
import Button from '../src/components/Button';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import { Drawer } from '../src/components/Drawer';

export default class PortalPage extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
        <Fragment>
          <Drawer open={this.state.open} handleRequestClose={this.toggleOpen}>
            <p>{'Hi, im a drawer'}</p>
          </Drawer>
          <button onClick={this.toggleOpen}>click</button>
        </Fragment>
      </MaterialThemeProvider>
    );
  }
}

