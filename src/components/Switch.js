import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Color from 'color';
import elevation from '../mixins/elevation';
import ripple from '../mixins/ripple';
import { deriveLightColor } from '../mixins/deriveLightColor';

class SwitchComponent extends PureComponent {
  state = {
    on: false,
  };

  /**
   * TODO: add an invisible input element to switch.
   * This will improve behavior of the switch if being used uncontrolled.
   * It will also be good for a11y.
   */
  isControlled = () => this.props.on !== undefined;

  handleOnClick = () => {
    if (!this.props.disabled) {
      if (!this.isControlled()) {
        this.setState(prevState => ({
          on: !prevState.on,
        }));
      }
      this.props.onChange && this.props.onChange();
    }
  };

  render() {
    const on = this.isControlled() ? this.props.on : this.state.on;
    return (
      <div className={`${this.props.className} smc-switch-wrapper`} onClick={this.handleOnClick}>
        <SwitchTrack {...this.props} on={on}>
          <SwitchThumb {...this.props} on={on} />
        </SwitchTrack>
      </div>
    );
  }
}

SwitchComponent.defaultProps = {
  radialReaction: true,
};

const DISABLED_COLOR = 'rgb(189, 189, 189)';

const getBaseColor = ({ color, theme, primary }) => {
  if (color) return color;
  if (primary) return theme.primary;
  return theme.accent;
};

const disabledTrackStyle = css`
  background-color: ${(props) => {
    if (!props.disabled) return;
    return props.on ? deriveLightColor(getBaseColor(props), 0.2) : deriveLightColor(DISABLED_COLOR);
  }};
`;

const disabledThumbStyle = css`
  background-color: ${(props) => {
    if (!props.disabled) return;
    return props.on
      ? deriveLightColor(getBaseColor(props))
      : Color('#fff')
        .darken(0.1)
        .string();
  }};
`;

export const SwitchTrack = styled.div.attrs({
  className: 'smc-switch-track',
})`
  width: 36px;
  height: 14px;
  border-radius: 15px;
  position: relative;
  display: inline-flex;
  margin-right: 15px;
  align-items: center;
  background-color: ${props => (props.on ? deriveLightColor(getBaseColor(props)) : DISABLED_COLOR)};
  ${disabledTrackStyle};
`;

export const SwitchThumb = styled.div.attrs({
  className: 'smc-switch-thumb',
})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  opacity: 1;
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
  ${props => (props.on ? 'left: 16px' : 'right: 16px')};
  background-color: ${props => (props.on ? getBaseColor(props) : '#fff')};
  ${props => (!props.disabled && props.radialReaction) && ripple(100, deriveLightColor(getBaseColor(props)))};
  ${disabledThumbStyle};
`;

export const Switch = styled(SwitchComponent)`
  display: inline-flex;
  align-items: center;
  :hover {
    ${props => !props.disabled && 'cursor: pointer'};
  }
`;
