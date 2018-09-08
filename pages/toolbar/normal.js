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
} from '../../.build/styled-material-components.esm.js';
import { generateParagraphs } from '../../utilities';

const PageContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 10px;
`;

export default () => (
  <PageContainer>
    <MaterialThemeProvider>
      <Toolbar>
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
