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
  position: absolute;
  background: #bdbdbd;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;

  & .smc-avatar-img {
    width: 100%;
    display: block;
  }
`;
