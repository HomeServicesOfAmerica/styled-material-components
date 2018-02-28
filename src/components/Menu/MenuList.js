import React from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

class MenuListComponent extends React.Component {
  componentDidMount() {
    findDOMNode(this.menuList).firstChild.focus();
  }

  handleKeyDown = (event) => {
    const currItem = document.activeElement;

    if (event.keyCode === 38) { // up arrow
      currItem.previousSibling ? currItem.previousSibling.focus() : currItem.focus();
    }
    if (event.keyCode === 40) { // down arrow
      currItem.nextElementSibling ? currItem.nextElementSibling.focus() : currItem.focus();
    }
    if (event.keyCode === 27) { // esc
      if (this.props.onClose) this.props.onClose();
    }
  };

  render() {
    return (
      <ul
        role="menu"
        className={`${this.props.className} smc-menu-list`}
        ref={(ref) => {this.menuList = ref;}}
        onKeyDown={this.handleKeyDown}>
        {this.props.children}
      </ul>
    );
  }
}

const MenuSelect = styled(MenuListComponent)`
  position: relative;
  margin: 8px 0;
  padding: 0;
  list-style: none;
  width: auto;
`;

export default MenuSelect;
