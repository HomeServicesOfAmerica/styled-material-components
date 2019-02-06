import React from 'react';
import styled from 'styled-components';

const formatInitials = (name) => {
  if (!name) return '';
  if (name.length <= 2) return name;
  const pieces = name.split(' ');
  const initials = pieces.length === 1 ? pieces[0][0] : pieces[0][0] + pieces[1][0];
  return initials.toUpperCase();
};

export const Avatar = styled(({ className, src, name }) => (
  <div className={className}>
    {src && <img src={src} />}
    {!src && formatInitials(name)}
  </div>
))`
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
