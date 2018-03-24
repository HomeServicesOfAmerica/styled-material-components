import React from 'react';
import styled from 'styled-components';
import withRipple from '../../enhancers/withRipple';

const StyledListItem = styled.li`
`;
const RippleListItem = withRipple(StyledListItem);

const MenuItemComponent = ({ className, children, onClick, onKeyDown }) => (
  <RippleListItem
    className={`${className} smc-menu-list-item`}
    onClick={onClick}
    onKeyPress={onKeyDown}
    tabIndex="0">
    {children}
  </RippleListItem>
);


const MenuItem = styled(MenuItemComponent)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0px 40px 0px 16px;
  z-index: 15;
  transition-duration: 0.3s;
  &:hover {
    background-color: rgba(232, 232, 232, 1);
    cursor: pointer;
  } 

  &:focus {
    background-color: rgba(232, 232, 232, 1);
    outline: none;
  }
`;

export default MenuItem;
