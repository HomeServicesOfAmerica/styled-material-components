import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import TextField from '../src/components/TextField';

const validateLength = str => str.length > 7;

class TextFieldPage extends PureComponent {
  state = {
    controlledInputValue: '',
  };

  handleChange = (e) => {
    console.log(`controlled value changing from ${this.state.controlledInputValue} to ${e.target.value}`);
    this.setState({ controlledInputValue: e.target.value });
  }

  render() {
    return (<MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
      <div
        className={this.props.className}>
        <h1>Text Fields</h1>
        <h2>Simple Examples</h2>
        <TextField
          hintText={'Hint Text'}
          style={{ marginBottom: '50px', width: '400px' }} />
        <TextField
          hintText={'Hint Text can be as long as you want. It will wrap'}
          style={{ marginBottom: '20px' }} />
        <TextField
          style={{ marginBottom: '20px' }} />
        <TextField
          defaultValue={'Default Value'}
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'Full Width'}
          fullWidth
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'autofocus'}
          style={{ marginBottom: '20px' }}
          autoFocus />
        <TextField
          hintText={'with hint text'}
          style={{ marginBottom: '20px' }}
          floatingLabelText={'floating label'} />
        <TextField
          style={{ marginBottom: '20px' }}
          floatingLabelText={'floating label'} />
        <TextField
          style={{ marginBottom: '40px' }}
          helperText={'helper text'} />
        <TextField
          hintText={'Controlled Input (check your console)'}
          style={{ marginBottom: '20px' }}
          value={this.state.controlledInputValue}
          onChange={this.handleChange} />
        <h2>Styled Examples</h2>
        <TextField
          hintText={'Custom Underline Color'}
          underlineColor={'pink'}
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'Custom Underline Focus Color'}
          underlineFocusColor={'pink'}
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'Styled Hint Text'}
          hintTextStyle={{ color: 'pink', fontSize: '10px' }}
          style={{ marginBottom: '30px' }} />
        <TextField
          floatingLabelStyle={{ color: 'pink' }}
          floatingLabelText={'Styled Floating Label'}
          style={{ marginBottom: '30px' }} />
        <TextField
          floatingLabelFocusStyle={{ color: 'pink' }}
          floatingLabelText={'Styled Floating Label Focus'}
          style={{ marginBottom: '30px' }} />
        <h2>Error Examples</h2>
        <TextField
          hintText={'Pass in an error'}
          errorText={'This error was passed in'}
          error
          style={{marginBottom: '30px'}} />
        <TextField
          hintText={'minimum length 8'}
          validator={validateLength}
          errorText={'That word is too short'}
          style={{marginBottom: '30px'}} />
        <TextField
          floatingLabelText={'A word that is at least 8 chars long'}
          validator={validateLength}
          errorText={'That word is too short'}
          style={{marginBottom: '30px'}} />
      </div>
    </MaterialThemeProvider>);
  }
}

const StyledTextFieldPage = styled(TextFieldPage)`
  margin: 0 10%;
  width: 80%;
`;

export default StyledTextFieldPage;
