import React from 'react';
import styled from 'styled-components';

const MediaItemComponent = props => (
  <img className={`${props.className} card-media-item`} src={props.src}>{props.children}</img>
);

const MediaItem = styled(MediaItemComponent)`
  display: inline-block;
  width: auto;
  height: 80px;
  margin: 16px 0 0;
  padding: 0;
  ${props => props.scale && `
    height: ${props.scale * 80}px;
    width: auto;
    ${props.scale === 3 && `
      margin-bottom: 16px;
    `}
  `}
`;

export default MediaItem;
