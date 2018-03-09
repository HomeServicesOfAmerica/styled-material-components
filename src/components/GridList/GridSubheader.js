import React from 'react';
import styled from 'styled-components';

const GridSubheaderComponent = ({ className, title }) => (
  <div className={`${className} smc-grid-subheader`}>
    {title && (
      <div>
        {title}
      </div>
    )}
  </div>
);

// if header is on the page but not scrolled past
  // position: relative
// else (until next subheader reaches top)
  // position: fixed;
  // box-shadow: 0 5px rgba(0,0,0,0.1);

const GridSubheader = styled(GridSubheaderComponent)`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  top: 0;
  height: 48px;
  width: 100%;
  padding-left: 16px;

  > .smc-grid-subheader {
    position: relative;
  }

  > .smc-grid-subheader-fixed {
    position: fixed;
    box-shadow: 0 5px rgba(0,0,0,0.1);
  }
`;

export default GridSubheader;
