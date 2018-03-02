import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import TextField from '../src/components/TextField';
import Button from '../src/components/Button';

const validateLength = str => str.length > 7;

const TextFieldWithBottomMargin = TextField.extend`
  margin-bottom: 20px;
`;

const TextFieldWithStyledPrefixAndSuffix = TextFieldWithBottomMargin.extend`
  > .smc-textfield-suffix {
    color: purple;
  }
  > .smc-textfield-prefix {
    color: maroon;
  }
`;

class TextFieldPage extends PureComponent {
  state = {
    controlledInputValue: '',
    shouldReset: false,
  };

  handleChange = e => this.setState({ controlledInputValue: e.target.value });

  render() {
    return (
      <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
        <div className={this.props.className}>
          <h1>Text Fields</h1>
          <h2>Simple Examples</h2>
          <TextFieldWithBottomMargin hintText={'autofocus'} autoFocus />
          <TextFieldWithBottomMargin hintText={'Hint Text'} />
          <TextFieldWithBottomMargin defaultValue={'Default Value'} />
          <TextFieldWithBottomMargin
            floatingLabelText={'floating label'}
          />
          <TextFieldWithBottomMargin
            hintText={'with hint text'}
            floatingLabelText={'floating label'}
          />
          <TextFieldWithBottomMargin
            helperText={'persistent helper text'}
            helperTextPersistent
          />
          <TextFieldWithBottomMargin helperText={'default helper text'} />
          <TextFieldWithBottomMargin hintText={'disabled'} disabled />
          <TextFieldWithBottomMargin
            hintText={'Controlled Input'}
            value={this.state.controlledInputValue}
            onChange={this.handleChange}
          />
          <TextFieldWithBottomMargin
            hintText={'Focus disabled'}
            focusDisabled
          />
          <TextFieldWithBottomMargin hintText={'Full Width'} fullWidth />
          <h2>Error Examples</h2>
          <TextFieldWithBottomMargin
            hintText={'Controlled error'}
            errorText={'This error was passed in'}
            error
          />
          <TextFieldWithBottomMargin
            hintText={'with validation'}
            helperText={'helper text and validation'}
            validator={validateLength}
            errorText={'This should be at least 8 chars'}
          />
          <TextFieldWithBottomMargin
            floatingLabelText={'A required field'}
            required
          />
          <TextFieldWithBottomMargin prefix={'$'} />
          <TextFieldWithBottomMargin suffix={'lb'} />
          <TextFieldWithStyledPrefixAndSuffix
            prefix="$"
            suffix="/mo."
          />
          <TextFieldWithBottomMargin
            floatingLabelText={
              <div>
                React component
                <img
                  style={{ height: '18px' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png"
                />
              </div>
            }
          />
          <h2>Text areas</h2>
          <TextFieldWithBottomMargin
            textarea
            floatingLabelText="Text area with 1 row"
          />
          <TextFieldWithBottomMargin
            textarea
            floatingLabelText="Text area with two rows"
            rows={2}
          />
          <TextFieldWithBottomMargin
            textarea
            multiline
            floatingLabelText="Multiline text area"
          />
          <TextFieldWithBottomMargin
            rows={2}
            defaultValue="These changes will return"
            reset={this.state.shouldReset}
            onReset={() => this.setState({ shouldReset: false })}
          />
          <Button onClick={() => this.setState({ shouldReset: true })}>Reset</Button>
          <h2>Dropdown Menu</h2>
          <TextFieldWithBottomMargin
            floatingLabelText="Dropdown Menu"
            options={['option1', 'option2']}
            callback={e => alert(`Can be externally controlled, ${e}`)}
          />
          <h4>No Selected Default Option</h4>
          <TextFieldWithBottomMargin
            floatingLabelText="Dropdown Menu"
            options={['option1', 'option2']}
            defaultOption={'select an option'}
          />
          <h4>Selected Default Option</h4>
          <TextFieldWithBottomMargin
            floatingLabelText="Dropdown Menu"
            options={['option0', 'option1', 'option2']}
            defaultOption={'option2'}
          />
          <h4>Invalid Options Passed In</h4>
          <TextFieldWithBottomMargin
            floatingLabelText="Dropdown Menu"
            options={'invalid option'}
          />
        </div>
      </MaterialThemeProvider>
    );
  }
}

const StyledTextFieldPage = styled(TextFieldPage)`
  margin: 0 10%;
  width: 80%;
`;

export default StyledTextFieldPage;
