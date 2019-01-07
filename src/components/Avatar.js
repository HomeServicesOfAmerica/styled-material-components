import React from 'react';
import styled from 'styled-components';

export const Avatar = styled(({ className, src, name }) => {
  const initials = name && `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  return (
    <div className={className}>
      {src && <img src={src} />}
      {!src && name && initials.toUpperCase()}
    </div>
  );
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.color || '#bdbdbd'};
  img {
    width: inherit;
    height: inherit; 
    object-fit: cover;
    object-position: ${props => props.imagePosition || 'center top'};
  }
`;
