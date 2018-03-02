import styled from 'styled-components';
import React, { Component, Fragment } from 'react';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import { ArrowDropDown } from './../icons/icons';

const Dropdown = styled.select`
  border-color: transparent;
  background-color: transparent;
  color: black;
  width: 100%;
  position: absolute;
  z-index: 1;
  font-size: 17px;
  cursor: pointer;
  -webkit-appearance: button; /* hide default arrow in chrome OSX */

  &:focus {
    outline: none;
  }
`;

const HiddenOption = styled.option`
  display: none;
`;

const Symbol = styled(ArrowDropDown)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 5px;
  fill: #726969;
`;


export default class DropdownMenu extends Component {
  state = {
    isOpen: false,
    options: this.props.options || [],
    selected: this.props.defaultOption || 'select one',
    isChrome: undefined,
  }
  
  /* eslint-disable react/no-did-mount-set-state */
  /*
   * Because Next.js executes its code server-side first,
   * using navigator and window will result to a reference error
   * outside of the componentDidMount method. Therefore, setting
   * the state inside of here is the only way to keep track of what
   * browser is being used on the client side.
   *
   * https://github.com/zeit/next.js/wiki/FAQ
   */

  componentDidMount() {
    if (navigator) {
      const isChrome = Boolean(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
      this.setState({ isChrome });
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
   
  onSelectMenuItem = (option): void => {
    if (this.props.callback) {
      this.props.callback(option);
    }
    this.setState({ selected: option });
  }

  toggleSelect = (e): boolean => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { options, isOpen, selected, isChrome } = this.state;
    return (
      <div onClick={this.toggleSelect} onFocus={this.handleOpen} tabIndex="0">
        {isChrome === false && (
          <Dropdown
            defaultValue={selected}
            onClick={({ target: { value } }) => this.props.callback(value)}
          >
            {options.map(option => (
              <option key={option}>
                {option}
              </option>
            ))}
          </Dropdown>
        )}
        {isChrome === true && (
          <Fragment>
            <Dropdown
              value={selected}
              hidden={isOpen}
            >
              {options.map(option => (
                <HiddenOption
                  key={option}
                >
                  {option}
                </HiddenOption>
              ))}
            </Dropdown>
            <Menu
              aria-hidden="true"
              value={selected}
              open={isOpen}
              onClose={this.handleClose}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  onClick={() => this.onSelectMenuItem(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
        )}
        <Symbol />
      </div>
    );
  }
}
