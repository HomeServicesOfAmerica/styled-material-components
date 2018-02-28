import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

import List from '../src/components/List/List';
import ListItem from '../src/components/List/ListItem';

const HomePage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <List className={className}>
      <h1>Styled Material Components</h1>
      <ListItem>
        <Link href="/appbar"><a>Appbars Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/buttons"><a>Buttons Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/bottomsheets"><a>Bottomsheets Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/cards"><a>Cards Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/checkboxes"><a>Checkboxes Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/chips"><a>Chips Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/dialog"><a>Dialog Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/divider"><a>Divider Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/drawer"><a>Drawers Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/gridlists"><a>Grid Lists Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/lists"><a>Lists Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/menus"><a>Menus Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/tabs"><a>Tabs Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/tables"><a>Tables Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/text-fields"><a>TextFields Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/sliders"><a>Sliders Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/snackbar"><a>Snackbar Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/switches"><a>Switches Page</a></Link>
      </ListItem>
    </List>
  </MaterialThemeProvider>
);

const StyledHomePage = styled(HomePage)`
  padding: 25px;

  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;
