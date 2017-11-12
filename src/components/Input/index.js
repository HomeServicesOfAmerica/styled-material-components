import React from 'react';
import { Group, InputComponent, Bar, Label, Highligter, ErrorLabel } from './styled';

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isBlurred: false,
      validationError: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isBlurred } = this.state;
    const { validate } = this.props;

    if (validate) {
      if (isBlurred) {
        if (validate(nextProps.value)) {
          this.setState({ validationError: false });
        } else {
          this.setState({ validationError: true });
        }
      }
    }
  }

  handleOnBlur = () => {
    const { isBlurred } = this.state;
    const { validate, value } = this.props;

    if (validate) {
      if (!isBlurred) {
        if (validate(value)) {
          this.setState({ isBlurred: true });
        } else {
          this.setState({
            isBlurred: true,
            validationError: true,
          });
        }
      }
    }
  }

  handleOnChange = (event) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.target.value);
    }
  }

  render() {
    const { value, label, getRef, disabled, errMessage, onClick } = this.props;
    const { validationError } = this.state;

    const valueToDisplay = value === undefined ? '' : value;

    return (
      <Group error={validationError}>
        <InputComponent
          value={valueToDisplay}
          onChange={this.handleOnChange}
          onClick={onClick}
          required
          innerRef={getRef}
          blocked={disabled}
          onBlur={this.handleOnBlur}
          error={validationError} />
        <Bar error={validationError} />
        <Highligter />
        <Label error={validationError}>{label}</Label>
        {validationError ? <ErrorLabel>{errMessage}</ErrorLabel> : null}
      </Group>
    );
  }
}
