import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { Divider } from '../Divider';

const ListItemComponent = ({ className, children, leftAvatar, avatarSize, withDivider }) => (
  <li className={className}>
    {leftAvatar && (
      <div className="smc-list-avatar">
        <Avatar src={leftAvatar} size={avatarSize} />
      </div>
    )}
    <div className="smc-list-content">
      {children}
      {Boolean(withDivider) && <Divider />}
    </div>
  </li>
);

const ListItem = styled(ListItemComponent)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 8px 0px 8px 16px;

  > .smc-list-avatar {
    box-sizing: border-box;
    padding-right: 16px;
    min-width: 72px;
  }

  > .smc-list-content {
    width: 100%;
  }
`;

export default ListItem;
