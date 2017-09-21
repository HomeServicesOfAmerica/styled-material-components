import React from 'react';
import styled from 'styled-components';
import typography from '../src/mixins/typography';
import Button from '../src/components/Button';
import withRipple from '../src/decorators/withRipple';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import Dialog from '../src/components/Dialog/Dialog';
import Backdrop from '../src/components/Dialog/Backdrop';
import Header from '../src/components/Dialog/Header';
import Surface from '../src/components/Dialog/Surface';
import Body from '../src/components/Dialog/Body';
import Footer from '../src/components/Dialog/Footer';

const DialogsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Dialogs</h1>
      <Surface>
        <Header title>this is the title biatch</Header>
      </Surface>
    </div>
  </MaterialThemeProvider>
);

const StyledDialogsPage = styled(DialogsPage)`

`;

export default StyledDialogsPage;
