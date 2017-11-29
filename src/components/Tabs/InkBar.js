import React from 'react';
import styled from 'styled-components';

const InkBarContainer = styled.div`
  position: relative;
  bottom: 0;
  left: ${props => props.selectedIndex * props.tabWidth}px;
  width: ${props => props.tabWidth}px;
  height: 2px;
  background-color: #000;
`;

const InkBar = ({ numTabs, selectedIndex, tabWidth }) => (
  <InkBarContainer
    className='smc-tab-bar-scroller'
    numTabs={numTabs}
    selectedIndex={selectedIndex}
    tabWidth={tabWidth} />
);

export default InkBar;
