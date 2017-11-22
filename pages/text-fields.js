import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import TextField from '../src/components/TextField';

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
        <h3>Simple Examples</h3>
        <h6>Examples demonstrating basic features</h6>
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
        <h3>Styled Examples</h3>
        <h6>Examples demonstrating custom styles</h6>
        <TextField
          hintText={'Custom Underline Color'}
          underlineColor={'pink'}
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'Custom Underline Focus Color'}
          underlineFocusColor={'pink'}
          style={{ marginBottom: '20px' }} />
        <TextField
          hintText={'Custom Hint Text Styles'}
          hintStyle={{ color: 'pink', fontSize: '10px' }}
          style={{ marginBottom: '30px' }} />
        <TextField
          hintText={'Controlled Input (check your console)'}
          style={{ marginBottom: '20px' }}
          value={this.state.controlledInputValue}
          onChange={this.handleChange} />
      </div>
    </MaterialThemeProvider>);
  }
}

const StyledTextFieldPage = styled(TextFieldPage)`
  margin: 0 10%;
  width: 80%;
`;

export default StyledTextFieldPage;
