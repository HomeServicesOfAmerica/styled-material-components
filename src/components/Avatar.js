import React from 'react';
import styled from 'styled-components';

const AvatarComponent = props => (
  <div className={`${props.className} smc-avatar`}>
    {props.src ? (
      <img src={props.src} className="smc-avatar-img" />
    ) : props.children}
  </div>
);

export const Avatar = styled(AvatarComponent)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  background: #bdbdbd;
  border-radius: 50%;
  overflow: hidden;

  & .smc-avatar-img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
