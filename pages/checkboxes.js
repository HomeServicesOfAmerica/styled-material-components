import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Checkbox, Box, CheckMark, List, ListItem, defaultTheme } from '../src';

const StyledCheckbox = Checkbox.extend`
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

const StyledCheckbox2 = Checkbox.extend`
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

class CheckboxesPage extends PureComponent {
  state = {
    checked: {
      1: true,
      2: false,
    },
  };

  handleChange = (n) => {
    const checked = !this.state.checked[n];
    this.setState({
      checked: {
        ...this.state.checked,
        [n]: checked,
      },
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <ThemeProvider theme={defaultTheme}>
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
              checked={checked[1]}
              onChange={() => {
                this.handleChange(1);
              }}
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
              checked={checked[2]}
              onChange={() => {
                this.handleChange(2);
              }}
              id="checkbox9"
              checkMark={Square}
            />
            <label htmlFor="checkbox9">Custom Checkbox</label>
          </ListItem>
        </List>
      </ThemeProvider>
    );
  }
}

export default CheckboxesPage;
