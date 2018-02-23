import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Checkbox extends PureComponent {
  state = {
    checked: this.props.checked || this.props.defaultChecked || false,
    indeterminate: this.props.indeterminate || false,
  };

  handleInputChange = (e) => {
    const checked = e.target.checked;
    this.setState({ indeterminate: false, checked });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { primary, disabled, checked: checkedProp, value, id, className } = this.props;
    const { indeterminate } = this.state;
    // determine if checkbox is controlled or uncontrolled
    const checked = checkedProp !== undefined ? checkedProp : this.state.checked;

    return (
      <Wrapper
        className={className}
        primary={primary}
        disabled={disabled}
        checked={checked}
      >
        <Box
          primary={primary}
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
        >
          {indeterminate && <IndeterminateMark />}
          {checked && !indeterminate && <CheckMark />}
        </Box>
        <Input
          onChange={this.handleInputChange}
          disabled={disabled}
          checked={checked}
          value={value}
          id={id}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  padding: 11px;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  cursor: ${props => !props.disabled && 'pointer'};
  :hover::before {
    opacity: 0.04;
  }
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => {
    if (props.disabled) return 'transparent';
    else if (!props.checked) return props.theme.textColors.secondary;
    else if (props.primary) return props.theme.primary;
    return props.theme.accent;
  }};
    opacity: 0;
    content: '';
  }
`;

const Box = styled.div`
  display: inline-flex;
  position: absolute;
  left: 11px;
  top: 11px;
  bottom: 11px;
  right: 11px;
  border: solid 2px
    ${(props) => {
    if (props.checked || props.indeterminate) return 'transparent';
    else if (props.disabled) return props.theme.disabledCheckbox;
    return props.theme.textColors.secondary;
  }};
  border-radius: 2px;
  background-color: ${(props) => {
    if (props.checked || props.indeterminate) {
      if (props.disabled) return props.theme.disabledCheckbox;
      else if (props.primary) return props.theme.primary;
      return props.theme.accent;
    }
  }};
  align-items: center;
  justify-content: center;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
  disabled: props => props.disabled,
})`
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: inherit;
  margin: 0;
`;

const CheckMark = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: <path d="M1.73,12.91 8.1,19.28 22.79,4.59" />,
})`
  fill: none;
  stroke: ${props => props.theme.white};
  width: 100%;
  height: 100%;
  stroke-width: 3.12px;
`;

const IndeterminateMark = styled.div`
  height: 2px;
  width: 14px;
  background-color: ${props => props.theme.white};
`;

export default styled(Checkbox)``;
export { Wrapper, Box, CheckMark, IndeterminateMark };
