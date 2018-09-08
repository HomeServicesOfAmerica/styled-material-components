import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const TitlePath = () => [
  <path d="M5 4v3h5.5v12h3V7H19V4z" key='path0' />,
];

const TitleIcon = styled(Icon).attrs({
  children: TitlePath,
})``;

export default TitlePath;
export { TitleIcon };
