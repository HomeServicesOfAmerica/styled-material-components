import React from 'react';
import styled from 'styled-components';

const InkBarContainer = styled.div`
  position: relative;
  bottom: 0;
  left: ${props => props.selectedIndex * props.tabWidth}px;
  width: ${props => props.tabWidth}px;
  height: 2px;
  background-color: ${props => props.inkbarColor};
`;

const InkBar = ({ numTabs, selectedIndex, tabWidth, inkbarColor }) => (
  <InkBarContainer
    className='smc-tab-bar-scroller'
    numTabs={numTabs}
    selectedIndex={selectedIndex}
    tabWidth={tabWidth}
    inkbarColor={inkbarColor} />
);

export default InkBar;
