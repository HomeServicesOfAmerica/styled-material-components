import React, { Component } from 'react';
import styled from 'styled-components';

import elevation from '../../mixins/elevation';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import { isDescendant } from '../../helpers';

class MenuComponent extends Component {
  state = {
    renderReady: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
    window.addEventListener('resize', this.recalculatePosition);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('touchstart', this.handleOutsideClick);
    window.removeEventListener('resize', this.recalculatePosition);
  }

  handleOutsideClick = (event) => {
    if (
      this.menu.contains(event.target) ||
      this.props.anchorEl === event.target ||
      isDescendant(this.props.anchorEl, event.target)
    ) return;
    this.props.onClose && this.props.onClose(event);
  };

  recalculatePosition = () => {
    const {
      props: { anchorEl, attachBottom, openUp, openLeft, noFit },
      menu,
    } = this;

    if (!anchorEl || !menu) return;
    // menu is the ref for the menu element
    const {
      height: menuHeight,
      width: menuWidth,
    } = menu.getBoundingClientRect();
    // anchorEl is the anchor element
    const {
      x: anchorX,
      y: anchorY,
      height: anchorHeight,
      width: anchorWidth,
    } = anchorEl.getBoundingClientRect();
    // offsetParent is the nearest absolute/fixed position ancestor
    const {
      x: offsetX,
      y: offsetY,
    } = anchorEl.offsetParent.getBoundingClientRect();
    // to adjust attachment, move down or to the right by the height / width of the anchor
    const bottomAttachmentAdjustment = attachBottom ? anchorHeight : 0;
    // to adjust opening direction, move down or to the right by the difference in height / width
    // between the anchor and menu
    const openUpAdjustment = anchorHeight - menuHeight - bottomAttachmentAdjustment;
    const openLeftAdjustment = anchorWidth - menuWidth;
    // to account for being over one side of the page, we reverse the open direction
    // calculate new position with adjustments
    /* eslint-disable no-mixed-operators */
    let newTop = anchorY - offsetY + bottomAttachmentAdjustment;
    let newLeft = anchorX - offsetX;
    // check for overflow and adjust opening directions
    const overBottom = !noFit && newTop + menuHeight > window.innerHeight;
    const overRight = !noFit && newLeft + menuWidth > window.innerWidth;
    if (overBottom || openUp) newTop += openUpAdjustment;
    if (overRight || openLeft) newLeft += openLeftAdjustment;
    const overTop = !noFit && newTop - (openUp ? menuHeight : 0) < 0;
    const overLeft = !noFit && newLeft - (openLeft ? menuWidth : 0) < 0;
    if (overTop) newTop -= openUpAdjustment;
    if (overLeft) newLeft -= openLeftAdjustment;
    // apply new styles inline to menu element
    this.menu.style.top = `${newTop}px`;
    this.menu.style.left = `${newLeft}px`;
    if (this.state.renderReady === false) this.setState({ renderReady: true });
  };

  render() {
    const { className, children, menuItems, open, onClose } = this.props;
    const renderMenuItems = open && menuItems && menuItems.length > 0;
    const renderChildren = open && !menuItems;

    return (
      <div
        style={{ display: this.state.renderReady ? 'block' : 'none' }}
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

