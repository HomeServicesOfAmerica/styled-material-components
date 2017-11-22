import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const HomePage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Placeholder</h1>
      <Link href="/buttons"><a>Buttons Page</a></Link>
      <br/>
      <Link href="/cards"><a>Cards Page</a></Link>
      <br/>
      <Link href="/text-fields"><a>TextFields Page</a></Link>
    </div>
  </MaterialThemeProvider>
);

const StyledHomePage = styled(HomePage)`
  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;
