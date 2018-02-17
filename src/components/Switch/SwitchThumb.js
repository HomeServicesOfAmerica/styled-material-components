import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import elevation from '../../mixins/elevation';
import ripple from '../../mixins/ripple';

class SwitchThumbComponent extends PureComponent {
  acceptableProps = {
    onClick: this.props.onClick,
    disabled: this.props.disabled,
  };

  render() {
    return (
      <div
        className={`${this.props.className} smc-switch`}
        {...this.acceptableProps}
      />
    );
  }
}

const lightOn = css`
  left: 20px;
  background-color: #009688;`;

const lightOff = css`
  right: 20px;
  background-color: #FAFAFA;
`;

const darkOn = css`
  left: 20px;
  background-color: #80CBC4;
`;

const darkOff = css`
  right: 20px;
  background-color: #BDBDBD;
`;

const lightDisabled = css`
  background-color: #BDBDBD;
`;

const darkDisabled = css`
  background-color: #424242;
`;

const raised = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
`;

const SwitchThumb = styled(SwitchThumbComponent)`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  position: absolute;

  &:hover {
    cursor: pointer;
  }

  ${ripple()}

  ${props => props.light && props.on && lightOn}
  ${props => props.light && !props.on && lightOff}
  ${props => props.dark && props.on && darkOn}
  ${props => props.dark && !props.on && darkOff}

  ${props => props.light && props.disabled && lightDisabled}
  ${props => props.dark && props.disabled && darkDisabled}
  
  ${props => props.raised && raised}
`;

export default SwitchThumb;
