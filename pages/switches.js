import React from 'react';
import Switch from '../src/components/Switch/Switch';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import withRipple from '../src/enhancers/withRipple';
import List from '../src/components/List/List';
import ListItem from '../src/components/List/ListItem';

// TODO:
// Finish diable
// Remove radial reaction for a desktop version

const RippleSwitch = withRipple(Switch);

const Switches = () => (
  <MaterialThemeProvider>
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
  </MaterialThemeProvider>
);

export default Switches;
