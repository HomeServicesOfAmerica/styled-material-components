import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import elevation from '../../mixins/elevation';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

class MenuComponent extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    document.addEventListener('scroll', this.recalculatePosition);
    window.addEventListener('resize', this.recalculatePosition);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
    document.removeEventListener('scroll', this.recalculatePosition);
    window.removeEventListener('resize', this.recalculatePosition);
  }

  handleClick = (event) => {
    if (this.menu.contains(event.target)) return;
    this.props.onClose && this.props.onClose(event);
  };
  
  recalculatePosition = debounce(() => {
    const { props: { anchorEl }, menu } = this;
    if (!anchorEl || !menu) return;
    const anchorRect = anchorEl.getBoundingClientRect();
    const menuRect = this.menu.getBoundingClientRect();
    const left = anchorEl.getBoundingClientRect().x;
    const top = anchorEl.getBoundingClientRect().y;
    const overBottom = top + menuRect.height > window.innerHeight;
    const overRight = left + menuRect.width > window.innerWidth;
    this.menu.style.top = `${anchorRect.top -
      (overBottom ? menuRect.height - anchorRect.height : 0)}px`;
    this.menu.style.left = `${anchorRect.left -
      (overRight ? menuRect.width - anchorRect.width : 0)}px`;
  }, 0);

  render() {
    const { className, children, menuItems, open, onClose } = this.props;
    const renderMenuItems = open && menuItems && menuItems.length > 0;
    const renderChildren = open && !menuItems;
    return (
      <div
        className={`${className} smc-Menu`}
        ref={(ref) => {
          this.menu = ref;
          this.recalculatePosition();
        }}
      >
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
  min-width: 72px;
  max-width: 280px;
  z-index: 5;
  background: #fff;
  ${elevation(3)};
`;

export default Menu;
