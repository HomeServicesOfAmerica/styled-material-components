import styled from 'styled-components';
import { Avatar } from './Avatar';
import { Circular } from './Circular';

export const Image = styled.img`
  width: auto;
  ${Avatar} &, ${Circular} & {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
