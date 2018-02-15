import React from 'react';
import styled, { css } from 'styled-components';
import elevation from '../../mixins/elevation';

const SwitchTrackComponent = props => (
  <div className={`${props.className} smc-switch`}>
    {props.children}
  </div>
);

const lightOn = css`
  background-color: rgba(0, 150, 136, .5);
`;

const lightOff = css`
  background-color: rgba(189, 189, 189, 1);
`;

const darkOn = css`
  background-color: rgba(128, 203, 196, .5);
`;

const darkOff = css`
  background-color: rgba(255, 255, 255, .5);
`;

const lightDisabled = css`
  background-color: rgba(0, 0, 0, .12);
`;

const darkDisabled = css`
  background-color: rgba(255, 255, 255, .1);
`;

const raised = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
`;

const SwitchTrack = styled(SwitchTrackComponent)`
  width: 40px;
  height: 14px;
  border-radius: 15px;
  position: relative;
  display: inline-flex;
  margin-right: 15px;
  align-items: center;

  ${props => props.light && props.on && lightOn}
  ${props => props.light && props.off && lightOff}
  ${props => props.dark && props.on && darkOn}
  ${props => props.dark && props.off && darkOff}

  ${props => props.light && props.disabled && lightDisabled}
  ${props => props.dark && props.disabled && darkDisabled}

  ${props => props.raised && raised}
`;

export default SwitchTrack;
