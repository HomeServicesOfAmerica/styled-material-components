import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const PlaylistPlayPath = () => [
  <path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z" key='path0' />,
];

const PlaylistPlayIcon = styled(Icon).attrs({
  children: PlaylistPlayPath,
});

export default PlaylistPlayPath;
export { PlaylistPlayIcon };
