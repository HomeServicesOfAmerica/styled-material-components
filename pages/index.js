import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const HomePage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Placeholder</h1>
      <Link href="/buttons"><a>Buttons Page</a></Link>
      <br />
      <Link href="/cards"><a>Cards Page</a></Link>
      <br />
      <Link href="/text-fields"><a>TextFields Page</a></Link>
      <br />
      <Link href="/tabs"><a>Tabs Page</a></Link>
      <br />
      <Link href="/dialog"><a>Dialog Page</a></Link>
      <br />
      <Link href="/lists"><a>Lists Page</a></Link>
      <br />
      <Link href="/sliders"><a>Sliders Page</a></Link>
      <br />
      <Link href="/tables"><a>Tables Page</a></Link>
      <br />
      <Link href="/snackbar"><a>Snackbar Page</a></Link>
      <br />
      <Link href="/drawer"><a>Drawers Page</a></Link>
      <br />
      <Link href="/divider"><a>Divider Page</a></Link>
    </div>
  </MaterialThemeProvider>
);

const StyledHomePage = styled(HomePage)`
  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;
