import React from 'react';
import styled from 'styled-components';
import typography from '../mixins/typography';


const AvatarComponent = props => (
  <div className={`${props.className} smc-avatar`}>
    {props.src ? (
      <img src={props.src} className="smc-avatar-img" />
    ) : props.children}
  </div>
);

const Avatar = styled(AvatarComponent)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bdbdbd;
  border-radius: 50%;
  overflow: hidden;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  ${props => props.size === 32 && `
    ${typography('body')};
    margin-right: -4px;
    color: #616161;
    font-size: 16px;
  `};
  ${({ hovered, ofDeletable }) => (hovered && ofDeletable) &&
    `background-color: rgba(0, 0, 0, 0.4);
     color: white;
  `};
  & .smc-avatar-img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Avatar;
