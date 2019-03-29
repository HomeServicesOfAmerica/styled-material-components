import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  MaterialThemeProvider,
  GridList,
  GridTile,
  List,
  ListSubheader,
  ListItemText,
  ListItem,
  Radio,
} from '../dist/styled-material-components.esm.js';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  text-transform: uppercase;
  color: rgb(112, 112, 112);
`;

const ExtendedRadio = styled(Radio)`
  color: rgba(200, 40, 180, 0.8);
  animation: ${pulse} 0.8s ease-in-out infinite;
`;

class DemoRadio extends Component {
  state = {
    checked: 'a',
  };

  handleChange = (e) => {
    this.setState({ checked: e.target.value });
  };

  render() {
    return (
      <MaterialThemeProvider>
        <div className={this.props.className}>
          <h1>Example Usage</h1>
          <Wrapper>
            <Label htmlFor="radio-a">
              <Radio
                aria-label="A"
                checked={this.state.checked === 'a'}
                id="radio-a"
                name="radio-button-demo"
                onChange={this.handleChange}
                value="a"
              />
              Default
            </Label>
            <Label htmlFor="radio-b">
              <Radio
                aria-label="B"
                checked={this.state.checked === 'b'}
                id="radio-b"
                name="radio-button-demo"
                onChange={this.handleChange}
                primary
                value="b"
              />
              Primary
            </Label>
            <Label disabled htmlFor="radio-c">
              <Radio
                aria-label="c"
                checked={this.state.checked === 'c'}
                onChange={this.handleChange}
                id="radio-c"
                name="radio-button-demo"
                disabled
                value="c"
              />
              Disabled
            </Label>
            <Label htmlFor="radio-d">
              <ExtendedRadio
                aria-label="D"
                checked={this.state.checked === 'd'}
                onChange={this.handleChange}
                id="radio-d"
                name="radio-button-demo"
                value="d"
              />
              Extended Style
            </Label>
            <Label htmlFor="radio-e">
              <Radio
                aria-label="E"
                checked={this.state.checked === 'e'}
                disableRipple
                id="radio-e"
                name="radio-button-demo"
                onChange={this.handleChange}
                value="e"
              />
              No Ripple
            </Label>
            <Label htmlFor="radio-f">
              <Radio
                aria-label="F"
                checked={this.state.checked === 'f'}
                checkedIcon={<span>😃</span>}
                disableRipple
                icon={<span>😞</span>}
                id="radio-f"
                name="radio-button-demo"
                onChange={this.handleChange}
                value="f"
              />
              Custom Icon
            </Label>
          </Wrapper>

          <GridList>
            <GridTile>
              <List>
                <ListSubheader>Props</ListSubheader>
                <ListItem>
                  <ListItemText
                    primary="checked"
                    secondary="Boolean: The checked state of the input element."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="onChange"
                    secondary="Function: The handler for the input's onChange event."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="icon"
                    secondary="Node: The icon to display when the component is unchecked."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="checkedIcon"
                    secondary="Node: The icon to display when the component is checked."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="primary"
                    secondary="Boolean: Sets the radio button to the active color theme's primary color."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="disabled"
                    secondary="Boolean: Disables the radio button."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="disableRipple"
                    secondary="Boolean: Disables the radio button."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="id" secondary="String: The id of the input element." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="name" secondary="String: The name of the input element." />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="value"
                    secondary="String: The value of the input element."
                  />
                </ListItem>
              </List>
            </GridTile>
          </GridList>
        </div>
      </MaterialThemeProvider>
    );
  }
}

const StyledRadioPage = styled(DemoRadio)`
  padding: 30px;
`;

export default () => <StyledRadioPage />;
