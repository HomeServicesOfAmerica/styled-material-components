import React, { Component } from 'react';
import { ThemeProvider, Button, MenuItem, Menu } from '../src';

const StandAloneMenu = Menu.extend`
  position: relative;
`;

class MenusPage extends Component {
  state = {
    open: false,
    value: '',
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ open: !this.state.open, anchorEl: event.currentTarget });
  };

  handleSelect = (selectedItem) => {
    const item = selectedItem;
    this.setState({ open: false, value: item || this.state.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { anchorEl } = this.state;

    const menuItems = [
      { text: 'Un', onClick: () => this.handleSelect() },
      { text: 'Deux', onClick: () => this.handleSelect() },
      { text: 'Trois', onClick: () => this.handleSelect() },
      { text: 'Quatre', onClick: () => this.handleSelect() },
    ];

    return (
      <ThemeProvider theme={{ primary: '#03A9F4' }}>
        <div style={{ margin: '60px 16px' }}>
          <h1>Menus</h1>
          <h2>Standalone Menu</h2>
          <p>Menus can accept MenuSelect and MenuOption SMC components as children,
             or can accept an array of objects as seen here - </p>
          <StandAloneMenu open menuItems={menuItems} />
          <h2>Button Menu</h2>
          <p>This component is accessible (navigable by clicks or keyboard events)
            and has an ARIA role defined as menu for screenreaders </p>
          <p>Each Option can receive a handleSelect prop that accepts a callback</p>
          <Button raised onClick={this.handleClick} style={{ marginRight: '15px', float: 'right' }}>Click me</Button>
          <Menu
            open={this.state.open}
            anchorEl={anchorEl}
            value={this.state.value}
            onClose={() => this.handleClose()}>
            <MenuItem onClick={() => this.handleSelect('Ron')}>Ron</MenuItem>
            <MenuItem onClick={() => this.handleSelect('Harry')}>Harry</MenuItem>
            <MenuItem onClick={() => this.handleSelect('Hermione')}>Hermione</MenuItem>
          </Menu>
          <h3>You selected: <span style={{ color: 'tomato' }}>{this.state.value}</span></h3>
        </div>
      </ThemeProvider>
    );
  }
}

export default MenusPage;
