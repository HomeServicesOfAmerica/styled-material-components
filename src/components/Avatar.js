import React from 'react';
import { Circular } from './Circular';
import { Image } from './Image';

export const Avatar = Circular.extend.attrs({
  children: props => (props.src ? <Image src={props.src} /> : props.children),
}) `
  // This is just here because we have to have some sort of styles applied at this level.
  text-align: left;
`;
