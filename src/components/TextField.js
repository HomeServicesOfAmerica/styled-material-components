/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import React, { PureComponent } from 'react';

class TextFieldComponent extends PureComponent {
  state = {
    text: this.props.defaultValue || '',
    focus: false,
  }

  onChange = (e) => {
    this.props.onChange && this.props.onChange(e);
    this.setState({ text: e.target.value });
  }

  onFocus = (e) => {
    this.props.onFocus && this.props.onFocus(e);
    this.setState({ focus: true });
  }

  onBlur = (e) => {
    this.props.onBlur && this.props.onBlur(e);
    this.setState({ focus: false });
  }

  render() {
    return (
      <Container
        className={'smc-text-field-container'}
        style={this.props.style}
        fullWidth={this.props.fullWidth}
        underlineColor={this.props.underlineColor} >
        <FloatingLabel
          className={'smc-text-field-floating-label'}
          style={this.state.focus
            ? this.props.floatingLabelFocusStyle
            : this.props.floatingLabelStyle}
          floating={this.state.focus || this.props.hintText || this.state.text.length}>
          {this.props.floatingLabelText}
        </FloatingLabel>
        <HintText
          className={'smc-text-field-hint-text'}
          style={this.props.hintTextStyle}
          display={!this.props.defaultValue && !this.state.text.length && !this.props.value} >
          {this.props.hintText}
        </HintText>
        {this.props.helperText && <HelperText
          className={'smc-text-field-helper-text'}
          style={this.props.helperTextStyle} >
          {this.props.helperText}
        </HelperText>}
        <UnderlineFocus
          className={'smc-text-field-underline-focus'}
          focus={this.state.focus}
          underlineColor={this.props.underlineColor}
          underlineFocusColor={this.props.underlineFocusColor} />
        <Input
          autoFocus={this.props.autoFocus}
          value={this.props.value || this.state.text}
          autoComplete={false}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={'smc-text-field-input'} />
      </Container>
    );
  }
}

const primaryTextColor = css`${props => props.theme.textColors.primary}`;
const hintTextColor = css`${props => props.theme.textColors.hint}`;
const primary = css`${props => props.theme.primary}`;

const Container = styled.div`
  font-size: 16px;
  line-height: 1.5em;
  width: ${props => props.fullWidth ? '100%' : '256px'};
  position: relative;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  cursor: auto;
  border-bottom: 0.5px solid ${props => props.underlineColor || hintTextColor}
`;

const FloatingLabel = styled.div`
  position: absolute;
  transition: all 200ms;
  bottom: ${props => props.floating ? '1.5em' : '0em'};
  font-size: ${props => props.floating ? '0.75em' : '1em'};
  color: ${props => props.floating ? primary : hintTextColor};
  width: 100%;
`;

const HintText = styled.div`
  position: absolute;
  opacity: ${props => +props.display};
  color: ${hintTextColor};
  transition: all 200ms;
  bottom: 0px;
  width: 100%;
`;

const HelperText = styled.div`
  position: absolute;
  color: ${hintTextColor};
  transition: all 200ms;
  bottom: -2em;
  font-size: 0.75em;
  width: 100%;
`;


const UnderlineFocus = styled.div`
  position: absolute;
  bottom: 0px;
  border-top: 1.5px solid;
  border-top-color: ${props =>
    props.underlineFocusColor || props.underlineColor || primary};
  width: 0%;
  transition: width 200ms;
  ${props => props.focus && 'width: 100%'};
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  color: ${primaryTextColor};
  cursor: inherit;
  background-color: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
`;

export default TextFieldComponent;
