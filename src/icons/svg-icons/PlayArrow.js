import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const PlayArrowPath = () => [
  <path d="M8 5v14l11-7z" key='path0' />,
];

const PlayArrowIcon = styled(Icon).attrs({
  children: PlayArrowPath,
})``;

export default PlayArrowPath;
export { PlayArrowIcon };
