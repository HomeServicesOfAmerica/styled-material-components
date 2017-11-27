import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import TextField from '../src/components/TextField';

const validateLength = str => str.length > 7;

class TextFieldPage extends PureComponent {
  state = {
    controlledInputValue: '',
  };

  handleChange = e => this.setState({ controlledInputValue: e.target.value })

  render() {
    return (<MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
      <div
        className={this.props.className}>
        <h1>Text Fields</h1>
        <h2>Simple Examples</h2>
        <TextField
          hintText={'autofocus'}
          containerStyle={{ marginBottom: '20px' }}
          autoFocus />
        <TextField
          hintText={'Hint Text'}
          containerStyle={{ marginBottom: '20px' }} />
        <TextField
          defaultValue={'Default Value'}
          containerStyle={{ marginBottom: '20px' }} />
        <TextField
          containerStyle={{ marginBottom: '20px' }}
          floatingLabelText={'floating label'} />
        <TextField
          hintText={'with hint text'}
          containerStyle={{ marginBottom: '20px' }}
          floatingLabelText={'floating label'} />
        <TextField
          containerStyle={{ marginBottom: '20px' }}
          helperText={'persistent helper text'}
          helperTextPersistent />
        <TextField
          containerStyle={{ marginBottom: '20px' }}
          helperText={'default helper text'} />
        <TextField
          hintText={'disabled'}
          containerStyle={{ marginBottom: '20px' }}
          disabled />
        <TextField
          hintText={'Controlled Input'}
          containerStyle={{ marginBottom: '20px' }}
          value={this.state.controlledInputValue}
          onChange={this.handleChange} />
        <TextField
          hintText={'Full Width'}
          containerStyle={{ marginBottom: '20px' }}
          fullWidth />
        <h2>Error Examples</h2>
        <TextField
          hintText={'Controlled error'}
          errorText={'This error was passed in'}
          error
          containerStyle={{ marginBottom: '20px' }} />
        <TextField
          hintText={'with validation'}
          helperText={'helper text and validation'}
          validator={validateLength}
          errorText={'This should be at least 8 chars'}
          containerStyle={{ marginBottom: '30px' }} />
        <TextField
          floatingLabelText={'A required field'}
          required
          containerStyle={{ marginBottom: '20px' }} />
      </div>
    </MaterialThemeProvider>);
  }
}

const StyledTextFieldPage = styled(TextFieldPage)`
  margin: 0 10%;
  width: 80%;
`;

export default StyledTextFieldPage;
