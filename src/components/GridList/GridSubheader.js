import React from 'react';
import styled from 'styled-components';

const GridSubheaderComponent = ({ className, title }) => (
  <div className={`${className} smc-grid-subheader`}>
    {title && (
      <div>{title}</div>
    )}
  </div>
);

const GridSubheader = styled(GridSubheaderComponent)`
  text-align: left;
  top: 0px;
  height: 48px;
  width: 100%;
  padding-left: 16px;
  position: sticky;
`;

export default GridSubheader;
