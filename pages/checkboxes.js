import React, { PureComponent } from 'react';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import Checkbox from '../src/components/Checkbox';
import List from '../src/components/List/List';
import ListItem from '../src/components/List/ListItem';
import defaultTheme from '../src/theme/defaultTheme';

class CheckboxesPage extends PureComponent {
  state = {
    checked: true,
  };

  handleChange = () => {
    const checked = !this.state.checked;
    this.setState({ checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <MaterialThemeProvider theme={defaultTheme}>
        <List>
          <h1 style={{ marginLeft: 25 }}>Checkboxes</h1>
          <ListItem>
            <Checkbox id="checkbox2" />
            <label htmlFor="checkbox2">Accent (default)</label>
          </ListItem>
          <ListItem>
            <Checkbox primary label="Click Me" id="checkbox1" />
            <label htmlFor="checkbox1">Primary</label>
          </ListItem>
          <ListItem>
            <Checkbox defaultChecked id="checkbox3" />
            <label htmlFor="checkbox3">Defaults to Checked</label>
          </ListItem>
          <ListItem>
            <Checkbox disabled id="checkbox4" />
            <label htmlFor="checkbox4">Disabled</label>
          </ListItem>
          <ListItem>
            <Checkbox checked disabled id="checkbox5" />
            <label htmlFor="checkbox5">Checked and Disabled</label>
          </ListItem>
          <ListItem>
            <Checkbox checked={checked} onChange={this.handleChange} id="checkbox6" />
            <label htmlFor="checkbox6">Controlled Checkbox</label>
          </ListItem>
          <ListItem>
            <Checkbox indeterminate id="checkbox7" />
            <label htmlFor="checkbox7">Indeterminate Checkbox</label>
          </ListItem>
        </List>
      </MaterialThemeProvider>
    );
  }
}

export default CheckboxesPage;
