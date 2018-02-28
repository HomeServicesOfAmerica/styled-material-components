import React, { Component } from 'react';
import styled from 'styled-components';
import elevation from '../../mixins/elevation';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

class MenuComponent extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (event) => {
    if (this.menu.contains(event.target)) return;
    this.props.onClose && this.props.onClose();
  }

  render() {
    const { className, children, menuItems, open, onClose } = this.props;
    const renderMenuItems = open && menuItems && menuItems.length > 0;
    const renderChildren = open && !menuItems;

    return (
      <div className={`${className} smc-Menu`} ref={(ref) => {this.menu = ref;}}>
        {renderChildren &&
          <MenuList onKeyDown={this.handleKeyDown} onClose={onClose}>
            {children}
          </MenuList>
        }
        {renderMenuItems &&
          <MenuList onKeyDown={this.handleKeyDown} onClose={onClose}>
            {menuItems.map(item =>
              <MenuItem key={item.text} onClick={item.onClick}>{item.text}</MenuItem>)}
          </MenuList>
        }
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
  display:inline-block;
  min-width: 72px;
  max-width: 280px;
  z-index: 5;
  background: #fff;
  ${elevation(2)};
`;


export default Menu;
