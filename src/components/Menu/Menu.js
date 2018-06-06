import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import elevation from '../../mixins/elevation';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

class MenuComponent extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('touchstart', this.handleClick);
    document.addEventListener('scroll', this.recalculatePosition);
    window.addEventListener('resize', this.recalculatePosition);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    document.removeEventListener('touchstart', this.handleClick);
    document.removeEventListener('scroll', this.recalculatePosition);
    window.removeEventListener('resize', this.recalculatePosition);
  }

  handleClick = (event) => {
    if (this.menu.contains(event.target) || this.props.anchorEl === event.target) return;
    this.props.onClose && this.props.onClose(event);
  };

  recalculatePosition = () => {
    const { props: { anchorEl }, menu } = this;
    if (!anchorEl || !menu) return;
    const menuRect = this.menu.getBoundingClientRect();
    const anchorRect = anchorEl.getBoundingClientRect();
    const offsetRect = anchorEl.offsetParent.getBoundClientRect();
    const anchorLeft = anchorRect.x + window.scrollX - offsetRect.x;
    const anchorTop = anchorRect.y + window.scrollY - offsetRect.y;
    const overBottom = anchorTop + menuRect.height > window.innerHeight;
    const overRight = anchorLeft + menuRect.width > window.innerWidth;
    this.menu.style.top = `${anchorTop -
      (overBottom ? menuRect.height - anchorRect.height : 0)}px`;
    this.menu.style.left = `${anchorLeft -
      (overRight ? menuRect.width - anchorRect.width : 0)}px`;
  }

  render() {
    const { className, children, menuItems, open, onClose } = this.props;
    const renderMenuItems = open && menuItems && menuItems.length > 0;
    const renderChildren = open && !menuItems;
    return (
      <div
        className={`${className} smc-Menu`}
        ref={(ref) => {
          this.menu = ref;
          debounce(this.recalculatePosition, 0);
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

const Menu = styled(MenuComponent) `
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
