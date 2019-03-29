import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';

const uncheckedPath =
  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z';

const checkedPath =
  'M 12 7 c -2.76 0 -5 2.24 -5 5 s 2.24 5 5 5 s 5 -2.24 5 -5 s -2.24 -5 -5 -5 Z m 0 -5 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 Z m 0 18 c -4.42 0 -8 -3.58 -8 -8 s 3.58 -8 8 -8 s 8 3.58 8 8 s -3.58 8 -8 8 Z';

const primaryStyle = css`
  color: ${props => props.theme.primary};
`;

const disabledStyle = css`
  cursor: initial;
  opacity: 0.26;
`;

const Container = styled.span`
  color: rgb(112, 112, 112);
  display: inline-flex;
  align-items: center;
  padding: 12px;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  ${({ primary }) => primary && primaryStyle}
  ${({ disabled }) => disabled && disabledStyle}
`;

const Inner = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const SVG = styled.svg`
  fill: currentColor;
  font-size: ${({ fontSize }) => fontSize};
  width: 1em;
  height: 1em;
  display: inline-block;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
`;

const grow = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const GrowingSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: currentColor;
  border-radius: 50%;
  animation: ${grow} 0.8s cubic-bezier(0, 0.98, 0.76, 1);
`;

const HiddenInput = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
`;

const DefaultIcon = ({ checked }) => (
  <SVG focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
    <path d={checked ? checkedPath : uncheckedPath} />
  </SVG>
);

class Radio extends PureComponent {
  state = {
    pressed: false,
  };

  handleChange = e => !this.props.disabled && this.props.onChange(e);

  handleMouseUp = () => !this.props.disabled && this.setState({ pressed: true });

  reset = () => this.setState({ pressed: false });

  render() {
    const {
      checked,
      checkedIcon,
      className,
      disabled,
      disableRipple,
      id,
      name,
      primary,
      value,
    } = this.props;
    let { icon } = this.props;

    // If user supplied an icon, use that (checked | unchecked)
    icon = checked ? checkedIcon : icon;

    return (
      <Container
        checked={checked}
        className={className}
        disabled={disabled}
        onMouseDown={this.reset}
        primary={primary}
      >
        <Inner>
          {icon || <DefaultIcon checked={checked} />}
          <HiddenInput
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onMouseUp={this.handleMouseUp}
            onChange={this.handleChange}
          />
          {!disableRipple && this.state.pressed && <GrowingSpan onAnimationEnd={this.reset} />}
        </Inner>
      </Container>
    );
  }
}

export { Radio };
