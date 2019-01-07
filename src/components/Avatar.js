import React from 'react';
import styled from 'styled-components';
import { Circular } from './Circular';
import { Image } from './Image';

const formatProps = ({ name, children }) => {
  if (!name) {
    return children;
  } else if (name.length <= 2) {
    return name;
  }

  const nameArr = name.split(' ');
  const initials =
    nameArr.length === 1 ? nameArr[0][0] : nameArr[0][0] + nameArr[1][0];

  return initials.toUpperCase();
};

export const Avatar = styled(Circular).attrs(props => ({
  children: props.src ? <Image src={props.src} /> : formatProps(props),
}))`
  // This is just here because we have to have some sort of styles applied at this level.
  text-align: left;
`;
