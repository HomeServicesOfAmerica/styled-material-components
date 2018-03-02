/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import React, { PureComponent } from 'react';
import DropdownMenu from './DropdownMenu';

class TextFieldComponent extends PureComponent {
  state = {
    text: this.props.defaultValue || '',
    focus: false,
    error: this.props.error || false,
    hasBeenFocused: false,
    height: '100%',
  };
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      nextProps.onReset && nextProps.onReset();
      this.setState({ text: nextProps.defaultValue || '' });
    }
  }

  textArea = null;

  onChange = (e) => {
    this.props.onChange && this.props.onChange(e);
    const text = e.target.value;
    const isInvalid = this.props.validator && !this.props.validator(text);
    const isEmptyButRequired = this.props.required ? !e.target.value : false;
    const newHeight = this.props.textarea ? this.textArea.scrollHeight : '';
    
    this.setState({
      text,
      error: this.props.error || isInvalid || isEmptyButRequired,
      height: !this.props.multiline || this.textArea.value === '' ? '100%' : newHeight,
    });
  };

  onFocus = (e) => {
    this.props.onFocus && this.props.onFocus(e);
    this.setState({ focus: true, hasBeenFocused: true });
  };

  onBlur = (e) => {
    this.props.onBlur && this.props.onBlur(e);
    this.setState({ focus: false });
  };

  render() {
    const hasValidOptions = this.props.options && (
      Array.isArray(this.props.options) &&
      this.props.options.length > 0
    );

    const hasError = Boolean(this.state.error || this.props.error || this.props.errorText);
    return (
      <div className={`${this.props.className} smc-text-field-container`}>
        <Suffix>{this.props.suffix}</Suffix>
        <Prefix>{this.props.prefix}</Prefix>
        <FloatingLabel
          className={'smc-text-field-floating-label'}
          error={hasError}
          hasPrefix={!!this.props.prefix}
          focus={this.state.focus}
          floatingLabelStyle={
            hasError ? this.props.floatingLabelErrorStyle : this.props.floatingLabelStyle
          }
          floating={this.state.focus ||
            this.props.hintText ||
            this.props.options ||
            this.props.defaultOption ||
            this.state.text.length
          }
        >
          {this.props.floatingLabelText || ''}
          {this.props.required ? '*' : ''}
          {/* <RequiredStar
            hasBeenFocused={this.state.hasBeenFocused}
            show={this.props.required}
            requiredStarStyle={this.props.requiredStarStyle} /> */}
        </FloatingLabel>
        {hasValidOptions && (
          <DropdownMenu
            defaultOption={this.props.defaultOption}
            options={this.props.options}
          />
        )}
        {!this.props.options && (
          <HintText
            className={'smc-text-field-hint-text'}
            hintTextStyle={this.props.hintTextStyle}
            hasPrefix={this.props.prefix}
            error={hasError}
            show={!this.props.defaultValue && !this.state.text.length && !this.props.value}
          >
            {this.props.hintText}
          </HintText>
        )}
        {this.props.helperText && (
          <HelperText
            className={'smc-text-field-helper-text'}
            helperTextStyle={this.props.helperTextStyle}
            show={!this.state.error && (this.props.helperTextPersistent ? true : this.state.focus)}
          >
            {this.props.helperText}
          </HelperText>
        )}
        {(this.props.options && !hasValidOptions) && (
          <ErrorText
            show={!hasError}
            className={'smc-text-field-error-text'}
            errorTextStyle={this.props.errorTextStyle}
          >
            Must have an array of at least one option passed in
          </ErrorText>
        )}
        <ErrorText
          show={hasError}
          className={'smc-text-field-error-text'}
          errorTextStyle={this.props.errorTextStyle}
        >
          {this.props.errorText}
        </ErrorText>
        <UnderlineFocus
          disabled={this.props.options || this.props.focusDisabled}
          className={'smc-text-field-underline-focus'}
          underlineFocusStyle={this.props.underlineFocusStyle}
          focus={this.state.focus}
          error={hasError}
        />
        {this.props.textarea
          ? (
            <Area
              rows={this.props.rows || 1}
              hasPrefix={!!this.props.prefix}
              hasSuffix={!!this.props.suffix}
              inputStyle={this.props.inputStyle}
              disabled={this.props.disabled}
              autoFocus={this.props.autoFocus}
              value={this.props.value || this.state.text}
              height={this.state.height}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              className={'smc-text-field-area'}
              innerRef={(ref) => {this.textArea = ref;}}
            />
          )
          : (
            <Input
              hasPrefix={!!this.props.prefix}
              hasSuffix={!!this.props.suffix}
              inputStyle={this.props.inputStyle}
              disabled={this.props.options || this.props.disabled}
              autoFocus={this.props.autoFocus}
              value={this.props.value || this.state.text}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              className={'smc-text-field-input'}
            />
          )
        }
      </div>
    );
  }
}

const primaryTextColor = css`
  ${props => props.theme.textColors.primary};
`;
const secondaryTextColor = css`
  ${props => props.theme.textColors.secondary};
`;
const hintTextColor = css`
  ${props => props.theme.textColors.hint};
`;
const primary = css`
  ${props => props.theme.primary};
`;
const error = css`
  ${props => props.theme.textColors.error || '#d50000'};
`;

const fadeInOut = css`
  transition: opacity 200ms;
  opacity: ${props => +props.show};
`;

const placeBelow = css`
  position: absolute;
  bottom: -2em;
  font-size: 0.75em;
  width: 100%;
`;

/*
This is the code for the red asterisk for required fields
Leaving this in in case there is further deliberation on this subject.
const RequiredStar = styled.span`
  ::after{
    color: ${props => props.hasBeenFocused ? error : hintTextColor};
    content: '*';
    show: ${props => props.show ? 'inline-block' : 'none'}
  }
  ${props => props.requiredStarStyle};
`;
*/

const SuffixComponent = props => (
  <div className={`${props.className} smc-textfield-suffix`}>{props.children}</div>
);

const Suffix = styled(SuffixComponent)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${hintTextColor};
`;

const PrefixComponent = props => (
  <div className={`${props.className} smc-textfield-prefix`}>{props.children}</div>
);

const Prefix = styled(PrefixComponent)`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${hintTextColor};
`;

const FloatingLabel = styled.div`
  position: absolute;
  transition: all 200ms;
  top: ${props => (props.floating ? '-1.5em' : '0em')};
  font-size: 1em;
  transform: ${props => `scale(${props.floating ? 0.75 : 1})`};
  transform-origin: 0 50%;
  color: ${(props) => {
    if (props.error) return error;
    return props.focus && props.floating ? primary : secondaryTextColor;
  }};
  width: 100%;
  left: ${props => (props.hasPrefix ? '1em' : '0em')};
  ${props => props.floatingLabelStyle};
`;

const HintText = styled.div`
  position: absolute;
  color: ${props => (props.error ? error : hintTextColor)};
  opacity: ${props => +props.show};
  width: 100%;
  left: ${props => (props.hasPrefix ? '1em' : '0em')};
  ${props => props.hintTextStyle};
`;

const ErrorText = styled.div`
  color: ${error};
  ${fadeInOut};
  ${placeBelow};
  ${props => props.errorTextStyle};
`;

const HelperText = styled.div`
  color: ${secondaryTextColor};
  ${fadeInOut};
  ${placeBelow};
  ${props => props.helperTextStyle};
`;

const UnderlineFocus = styled.div`
  position: absolute;
  bottom: 0px;
  border-top: 1.5px solid;
  border-top-color: ${props => (props.error ? error : primary)};
  width: 0%;
  transition: width 200ms;
  ${props => props.focus && !props.disabled && 'width: 100%'};
  ${props => props.underlineFocusStyle};
`;

/*
 * Styles that will be shared between textfield and text area
 */
const inputStyles = `
  position: relative;
  border: none;
  outline: none;
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

/*
 * Since these styles depend on props, they can't live in the template literal
 * above
 */
const Input = styled.input`${inputStyles}`.extend`
  width: calc(100% - ${({ hasSuffix }) => hasSuffix ? 1 : 0}em);
  color: ${primaryTextColor};
  padding-left: ${props => (props.hasPrefix ? '1em' : '0')};
  ${props => props.inputStyle};
`;

const Area = styled.textarea`${inputStyles}`.extend`
  width: calc(100% - ${({ hasSuffix }) => hasSuffix ? 1 : 0}em);
  height:  ${props => props.height - 4}px;
  color: ${primaryTextColor};
  padding-left: ${props => (props.hasPrefix ? '1em' : '0')};
  ${props => props.inputStyle};
  resize: none;
`;

const TextField = styled(TextFieldComponent)`
  width: ${props => (props.fullWidth ? '100%' : '167px')};
  font-size: 1em;
  line-height: 1.5em;
  position: relative;
  background-color: transparent;
  font-family: lato, sans-serif;
  border-bottom: 0.5px ${props => (props.disabled ? 'dotted' : 'solid')};
  border-bottom-color: ${props => (props.error ? error : hintTextColor)};
  ${props => props.options && `
    border-bottom-color: #726969;
  `}
`;

export default TextField;
