import React from 'react';
import styled from 'styled-components';

const GridListComponent = ({ className, children }) => (
  <div className={`${className} smc-grid-list`}>
    {children}
  </div>
);

const GridList = styled(GridListComponent)`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};;
  flex-wrap: wrap;
`;

export default GridList;
