import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar';

const ListItemComponent = ({ className, children, leftAvatar }) => (
  <li className={className}>
    {leftAvatar && (
      <Avatar src={leftAvatar} />
    )}
    <div className="smc-list-content">
      {children}
    </div>
  </li>
);

const ListItem = styled(ListItemComponent)`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 8px;
  border-bottom: 1px solid gray;

  > .smc-list-content {
    padding-left: ${props => (props.leftAvatar ? '72px' : '0px')}
  }
`;

export default ListItem;
