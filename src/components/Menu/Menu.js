import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

import elevation from '../../mixins/elevation';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import { isDescendant } from '../../helpers';

class MenuComponent extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('touchstart', this.handleOutsideClick);
  }

  menu = React.createRef();

  handleOutsideClick = (event) => {
    if (
      this.menu.current.contains(event.target) ||
      this.props.anchorEl === event.target ||
      isDescendant(this.props.anchorEl, event.target)
    ) {
      return;
    }
    this.props.onClose && this.props.onClose(event);
  };

  recalculatePosition = () => {
    const {
      props: { anchorEl, attachBottom, openUp, openLeft, noFit, fullWidth },
    } = this;

    const position = { top: 0, left: 0 };

    if (!anchorEl || !this.menu.current) return { top: '0px', left: '0px' };

    const anchorHeight = anchorEl.offsetHeight;
    const anchorWidth = anchorEl.offsetWidth;
    const menuHeight = this.menu.current.offsetHeight;
    const menuWidth = this.menu.current.offsetWidth;

    position.top = anchorEl.offsetTop;
    position.left = anchorEl.offsetLeft;

    if (openLeft) {
      position.left -= menuWidth + 5;
    }
    if (attachBottom) position.top += anchorEl.offsetHeight;
    if (openUp) position.top -= menuHeight;

    // Check to see if we should auto position the menu
    if (!noFit) {
      // For this we need the x, y position of the anchor
      const { x, y } = anchorEl.getBoundingClientRect();
      if (!openLeft && x + menuWidth >= window.innerWidth - 15) {
        position.left = anchorEl.offsetLeft - menuWidth - 5;
      }
      if (openLeft && x - menuWidth <= 0) {
        position.left = anchorEl.offsetLeft + anchorWidth + 5;
      }
      if (!openUp && y + menuHeight > window.innerHeight) {
        position.top = anchorEl.offsetTop - menuHeight;
        if (attachBottom) position.top -= anchorHeight + 5;
      }
      if (openUp && y - menuHeight <= 0) {
        position.top = anchorEl.offsetTop;
        if (attachBottom) position.top += anchorHeight;
      }
      if (fullWidth) {
        position.width = anchorWidth;
      }
    }
    return map(v => `${v}px`, position);
  };

  render() {
    const { className, children, menuItems, open, onClose } = this.props;
    const renderMenuItems = menuItems && menuItems.length > 0;
    const renderChildren = !menuItems;

    let position = { top: '0px', left: '0px' };

    if (open && this.menu.current && (renderMenuItems || renderChildren)) {
      position = this.recalculatePosition();
    }

    return (
      <div className={`${className} smc-Menu`} style={position} ref={this.menu}>
        {renderChildren && (
          <MenuList onKeyDown={this.handleKeyDown} onClose={onClose}>
            {children}
          </MenuList>
        )}
        {renderMenuItems && (
          <MenuList onKeyDown={this.handleKeyDown} onClose={onClose}>
            {menuItems.map(item => (
              <MenuItem key={item.text} onClick={item.onClick}>
                {item.text}
              </MenuItem>
            ))}
          </MenuList>
        )}
      </div>
    );
  }
}

const Menu = styled(MenuComponent)`
  padding: 0;
  position: absolute;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  display: inline-block;
  visibility: ${props => (props.open ? 'visible' : 'collapse')};
  & ${MenuItem} {
    opacity: ${props => (props.open ? 1 : 0)};
  }
  min-width: 72px;
  max-width: ${({ fullWidth }) => (!fullWidth ? '280px' : null)};
  z-index: 5;
  background: #fff;
  ${elevation(3)};
`;

export default Menu;
