import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MaterialThemeProvider, Checkbox, Box, CheckMark, List, ListItem } from '../.build/styled-material-components.esm.js';

// TODO: Things are being applied in different orders, and sometimes
// the styles are being applied, and other times they are not. The custom
// styles are only being applied when I save this file, but reloading the
// page reverts them back to the default styles.
const StyledCheckbox = styled(Checkbox)`
  ${Box} {
    background-color: transparent;
    border-color: skyblue;
  }
  ${CheckMark} {
    stroke: hotpink;
    stroke-width: 5px;
  }
`;

const Square = styled.div`
  background-color: ${props => props.theme.primary};
  height: 8px;
  width: 8px;
`;

const StyledCheckbox2 = styled(Checkbox)`
  :hover::before {
    opacity: 0;
  }

  ${Box} {
    ${props =>
    props.checked &&
      `
      border: solid 3px ${props.theme.primary};
      background-color: transparent;
    `};
  }
`;
export default class CheckboxesPage extends PureComponent {
  state = {
    checked: {
      checkbox6: false,
      checkbox9: false
    }
  };

  handleChange = ({
    target: { id }
  }) => {
    this.setState(({ checked }) => ({
      checked: {
        ...checked,
        [id]: !checked[id]
      }
    }));
  };

  render() {
    const { checked } = this.state;
    return (
      <MaterialThemeProvider>
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
            <Checkbox default="checked" id="checkbox3" />
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
            <Checkbox
              checked={checked["checkbox6"]}
              onChange={this.handleChange}
              id="checkbox6"
            />
            <label htmlFor="checkbox6">Controlled Checkbox</label>
          </ListItem>
          <ListItem>
            <Checkbox default="indeterminate" id="checkbox7" />
            <label htmlFor="checkbox7">Indeterminate Checkbox</label>
          </ListItem>
          <ListItem>
            <StyledCheckbox id="checkbox8" />
            <label htmlFor="checkbox8">Custom Checkbox</label>
          </ListItem>
          <ListItem>
            <StyledCheckbox2
              id="checkbox9"
              checked={checked["checkbox9"]}
              onChange={this.handleChange}
              checkMark={Square}
            />
            <label htmlFor="checkbox9">Custom Checkbox</label>
          </ListItem>
        </List>
      </MaterialThemeProvider>
    );
  }
}
