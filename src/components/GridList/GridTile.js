import React from 'react';
import styled from 'styled-components';

const GridTileComponent = ({ className, children }) => (
  <div className={`${className} smc-grid-tile-content`}>
    {children}
  </div>
);

const GridTile = styled(GridTileComponent)`
  position: relative,
  display: block;
  height: 100%;
  overflow: hidden;
  align-items: center;
  margin: 0 2px;
  min-height: 0;

  > .smc-grid-tile-content {
    width: 100%;
    height: 100%;
    min-height: 0;
  }
`;

export default GridTile;
