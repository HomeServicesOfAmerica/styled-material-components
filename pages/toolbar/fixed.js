import React from 'react';
import styled from 'styled-components';
import {
  MaterialThemeProvider,
  Toolbar,
  ToolbarTitle,
  ToolbarActions,
  BookmarkIcon,
  FileDownloadIcon,
  MenuIcon,
  PrintIcon,
} from '../../dist/styled-material-components.esm.js';
import { generateParagraphs } from '../../utilities';

const PageContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 10px;
  padding-top: 74px;
`;

export default () => (
  <PageContainer>
    <MaterialThemeProvider>
      <Toolbar fixed>
        <ToolbarTitle Icon={<MenuIcon />}>Title</ToolbarTitle>
        <ToolbarActions>
          <FileDownloadIcon />
          <PrintIcon />
          <BookmarkIcon />
        </ToolbarActions>
      </Toolbar>
      <Content>
        {generateParagraphs(8)}
      </Content>
    </MaterialThemeProvider>
  </PageContainer>
);
