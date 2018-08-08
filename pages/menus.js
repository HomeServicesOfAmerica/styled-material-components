import React, { Component } from 'react';
import { ThemeProvider, Button, MenuItem, Menu, Switch } from '../src';
import styled from 'styled-components';

const Controls = styled.div`
  width: 100%;
  ul {
    list-style-type: none;
  }
`;

const StandAloneMenu = styled(Menu)`
  position: relative;
`;

const PageWithBottomPadding = styled.div`
  margin-bottom: 200px;
`;

const PositionedButton = styled(Button)`
  margin: 0 20px;
  ${({ buttonPosition }) => {
    if (buttonPosition === 'center') return 'margin-left: calc(50% - 54px)';
    else if (buttonPosition === 'left') return 'float: left';
    return 'float:right';
  }}
`;

class MenusPage extends Component {
  state = {
    open: false,
    value: '',
    anchorEl: null,
    buttonPosition: 'left',
    attachBottom: false,
    openUp: false,
    openLeft: false,
  };

  handleClick = (event) => {
    // Have to add persist to event, and extract what we want
    // to pass it to setState that uses a function instead of
    // an object
    event.persist();
    const currentTarget = event.currentTarget;

    this.setState(
      ({ open }) => {
        return {
          open: !open,
          anchorEl: currentTarget,
        };
      },
    );
  };

  handleSelect = (selectedItem) => {
    // const item = selectedItem;
    // this.setState({ open: false, value: item || this.state.value });
    this.setState(
      ({ value }) => ({
        open: false,
        value: selectedItem || value,
      }),
    );
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleButtonMove = (e) => {
    this.setState({ buttonPosition: e.target.name });
  }
  render() {
    const { anchorEl } = this.state;

    const menuItems = [
      { text: 'Un', onClick: () => this.handleSelect() },
      { text: 'Deux', onClick: () => this.handleSelect() },
      { text: 'Trois', onClick: () => this.handleSelect() },
      { text: 'Quatre', onClick: () => this.handleSelect() },
    ];

    return (
      <ThemeProvider>
        <PageWithBottomPadding>
          <h1>Menus</h1>
          <h2>Standalone Menu</h2>
          <p>Menus can accept MenuSelect and MenuOption SMC components as children,
             or can accept an array of objects as seen here - </p>
          <StandAloneMenu open menuItems={menuItems} />
          <h2>Button Menu</h2>
          <p>This component is accessible (navigable by clicks or keyboard events)
            and has an ARIA role defined as menu for screenreaders </p>
          <p>Each Option can receive a handleSelect prop that accepts a callback</p>
          <p>{ 'Use the switches below to toggle props that control where the menu attaches to the button, and to which direction the menu opens' }</p>
          <p>{ "Menus will open to the available space. You can experiment with this by toggling the button's position and/or resizing the window. This behavior can be disabled by passing in a prop of noFit" }</p>
          <Controls>
            <ul>
              <li>
                <label htmlFor="floatRight">Float Button Right</label>
                <input
                  name="right"
                  id="floatRight"
                  checked={this.state.buttonPosition === 'right'}
                  onChange={this.handleButtonMove}
                  type="radio"
                />
              </li>
              <li>
                <label htmlFor="floatLeft">Float Button Left</label>
                <input
                  name="left"
                  id="floatLeft"
                  checked={this.state.buttonPosition === 'left'}
                  onChange={this.handleButtonMove}
                  type="radio"
                />
              </li>
              <li>
                <label htmlFor="center">Center Button</label>
                <input
                  name="center"
                  id="center"
                  checked={this.state.buttonPosition === 'center'}
                  onChange={this.handleButtonMove}
                  type="radio"
                />
              </li>
              <li>
                <label htmlFor="attachBottom">Toggle bottom attachment</label>
                <Switch id="attachBottom" onChange={() => this.setState(ps => ({ attachBottom: !ps.attachBottom }))} />
              </li>
              <li>
                <label htmlFor="openUp">Toggle menu opens upwards</label>
                <Switch id="openUp" onChange={() => this.setState(ps => ({ openUp: !ps.openUp }))} />
              </li>
              <li>
                <label htmlFor="openLeft">Toggle menu opens to the left</label>
                <Switch id="openLeft" onChange={() => this.setState(ps => ({ openLeft: !ps.openLeft }))} />
              </li>
              <li>
                <label htmlFor="noFit">Toggle menu noFit</label>
                <Switch id="noFit" onChange={() => this.setState(ps => ({ noFit: !ps.noFit }))} />
              </li>
            </ul>
          </Controls>
          <PositionedButton
            buttonPosition={this.state.buttonPosition}
            raised
            onClick={this.handleClick}
          >
            {this.state.value || 'open'}
          </PositionedButton>
          <Menu
            openUp={this.state.openUp}
            openLeft={this.state.openLeft}
            noFit={this.state.noFit}
            attachBottom={this.state.attachBottom}
            open={this.state.open}
            anchorEl={anchorEl}
            value={this.state.value}
            onClose={() => this.handleClose()}
          >
            <MenuItem onClick={() => this.handleSelect('Ron')}>Ron</MenuItem>
            <MenuItem onClick={() => this.handleSelect('Harry')}>
              Harry
            </MenuItem>
            <MenuItem onClick={() => this.handleSelect('Hermione')}>
              Hermione
            </MenuItem>
          </Menu>
        </PageWithBottomPadding>
      </ThemeProvider>
    );
  }
}


export default MenusPage;
