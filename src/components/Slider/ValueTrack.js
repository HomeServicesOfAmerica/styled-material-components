import React from 'react';
import styled from 'styled-components';

const ValueTrackComponent = props => (
  <div className={`${props.className} smc-slider-value-size`}>
    {props.children}
  </div>
);

const ValueTrack = styled(ValueTrackComponent)`
  height: 100%;
  overflow: hidden;
  max-width: ${props => props.width}px;
`;

export default ValueTrack;
