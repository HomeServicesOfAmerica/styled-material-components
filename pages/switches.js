// @flow
import React from "react";

import { List, ListItem, Switch, ThemeProvider } from "../src";

const Switches = () => (
  <ThemeProvider>
    <List>
      <h1 style={{ marginLeft: 25 }}>Switches</h1>
      <ListItem>
        <Switch id="switch1" />
        <label htmlFor="switch1">Default</label>
      </ListItem>
      <ListItem>
        <Switch primary id="switch2" />
        <label htmlFor="switch2">Primary</label>
      </ListItem>
      <ListItem>
        <Switch primary radialReaction={false} id="switch3" />
        <label htmlFor="switch3">Radial Effect Disabled</label>
      </ListItem>
      <ListItem>
        <Switch disabled on id="switch4" />
        <label htmlFor="switch4">Disabled and On</label>
      </ListItem>
      <ListItem>
        <Switch disabled id="switch5" />
        <label htmlFor="switch5">Disabled and Off</label>
      </ListItem>
    </List>
  </ThemeProvider>
);

export default Switches;
