// @flow
import styled from 'styled-components';
import React, { Component, Fragment } from 'react';

import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import { ArrowDropDownIcon } from '../icons';

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

const Symbol = styled(ArrowDropDownIcon)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 5px;
  fill: #726969;
`;

type DropdownMenuPropsType = {
  defaultOption?: string,
  onItemClick: (e: Object) => any,
  options: Array<string>,
};

type DropdownMenuStateType = {
  isChrome: ?boolean,
  isOpen: boolean,
  options: Array<string>,
  selected: string,
};

export default class DropdownMenu extends Component<
  DropdownMenuPropsType,
  DropdownMenuStateType,
> {
  state = {
    isOpen: false,
    selected: this.props.defaultOption || 'select one',
    isChrome: undefined,
  };

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
      const isChrome = Boolean(
        /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor),
      );
      this.setState({ isChrome });
    }
  }

  handleClose = (): void => {
    this.setState({ isOpen: false });
  };

  handleOpen = (): void => {
    this.setState({ isOpen: true });
  };

  onSelectMenuItem = e => {
    if (this.props.onItemClick) {
      this.props.onItemClick(e);
    }
    this.setState({ selected: e.target.value });
  };

  toggleSelect = e => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    // this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen, selected, isChrome } = this.state;
    const { options } = this.props;
    return (
      <div onClick={this.toggleSelect} onFocus={this.handleOpen} tabIndex="0">
        {!isChrome && (
          <Dropdown
            defaultValue={selected}
            onChange={e => this.onSelectMenuItem(e)}
          >
            {options.map(option => <option key={option}>{option}</option>)}
          </Dropdown>
        )}
        {isChrome && (
          <Fragment>
            <Dropdown value={selected} hidden={isOpen}>
              {options.map(option => (
                <HiddenOption key={option}>{option}</HiddenOption>
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
                  onClick={() =>
                    this.onSelectMenuItem({ target: { value: option } })
                  }
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
