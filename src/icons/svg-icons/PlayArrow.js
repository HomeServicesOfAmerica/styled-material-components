import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const PlayArrowPath = () => [
  <path d="M8 5v14l11-7z" key='path0' />,
];

const PlayArrowIcon = styled(Icon).attrs({
  children: PlayArrowPath,
});

export default PlayArrowPath;
export { PlayArrowIcon };
