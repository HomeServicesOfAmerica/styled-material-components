import React from 'react';
import styled from 'styled-components';
import List from '../src/components/List/List';
import ListItem from '../src/components/List/ListItem';
import ListItemText from '../src/components/List/ListItemText';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const ListsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>List with Avatar</h1>
      <div className="list">
        <List>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg">
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg">
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg">
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
        </List>
      </div>
      <h1>List without Avatar</h1>
      <div className="list">
        <List>
          <ListItem>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
        </List>
      </div>
      <h1>List with more text</h1>
      <div className="list">
        <List>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg" avatarSize={60}>
            <ListItemText
              primary="Primary Title" secondary={
                <div>
                  <p>(214) 520-8300</p>
                  <p>5015 Tracy Street Suite 102</p>
                  <p>Dallas, Texas 75205</p>
                </div>
              } />
          </ListItem>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg" avatarSize={60}>
            <ListItemText
              primary="Primary Title" secondary={
                <div>
                  <p>(214) 520-8300</p>
                  <p>5015 Tracy Street Suite 102</p>
                  <p>Dallas, Texas 75205</p>
                </div>
              } />
          </ListItem>
          <ListItem leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg" avatarSize={60}>
            <ListItemText
              primary="Primary Title" secondary={
                <div>
                  <p>(214) 520-8300</p>
                  <p>5015 Tracy Street Suite 102</p>
                  <p>Dallas, Texas 75205</p>
                </div>
              } />
          </ListItem>
        </List>
      </div>
      <h1>List with Avatar and dividers</h1>
      <div className="list">
        <List>
          <ListItem
            withDivider
            leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg"
          >
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem
            withDivider
            leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg"
          >
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem
            withDivider
            leftAvatar="http://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg"
          >
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
        </List>
      </div>
      <h1>List without Avatar, with dividers</h1>
      <div className="list">
        <List>
          <ListItem withDivider>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem withDivider>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
          <ListItem withDivider>
            <ListItemText primary="Primary Title" secondary="This is the secondary line" />
          </ListItem>
        </List>
      </div>
    </div>
  </MaterialThemeProvider>
);

const StyledListsPage = styled(ListsPage)`
  padding: 10px;

  > .list {
    width: 300px;
    border: 1px solid gray;
  }
`;

export default StyledListsPage;
