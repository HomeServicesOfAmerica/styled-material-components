import React from 'react';
import { Switch, ThemeProvider, withRipple, List, ListItem } from '../src';

// TODO:
// Finish diable
// Remove radial reaction for a desktop version

const RippleSwitch = withRipple(Switch);

const Switches = () => (
  <ThemeProvider>
    <List>
      <h1 style={{ marginLeft: 25 }}>Switches</h1>
      <ListItem>
        <RippleSwitch raised light id="switch1" />
        <label htmlFor="switch1">Light</label>
      </ListItem>
      <ListItem>
        <RippleSwitch raised dark id="switch2" />
        <label htmlFor="switch2">Dark</label>
      </ListItem>
      <ListItem>
        <RippleSwitch disabled raised light id="switch3" />
        <label htmlFor="switch3">Disabled and Light</label>
      </ListItem>
      <ListItem>
        <RippleSwitch disabled raised dark id="switch4" />
        <label htmlFor="switch4">Disabled and Dark</label>
      </ListItem>
    </List>
  </ThemeProvider>
);

export default Switches;
