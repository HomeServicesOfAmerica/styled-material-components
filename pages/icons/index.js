import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  FloatingActionButton,
  GridList,
  GridTile,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ThemeProvider,
  withRipple,
} from '../../src';
import { iconList } from './assets';
import { AddIcon, FileDownloadIcon, FileUploadIcon } from '../../src/icons';

const StyledButton = Button.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
  align-self: center;
`;

const StyledFab = FloatingActionButton.extend`
  margin: 0 16px;
`;

const StyledDivider = Divider.extend`
  margin: 30px 0;
`;

const IconsPage = ({ className }) => (
  <ThemeProvider>
    <section className={className}>
      <h1>Icons</h1>
      <GridList>{iconList.map((icon, i) => <GridTile>{icon}</GridTile>)}</GridList>
      <h1>Icon Buttons</h1>
      <GridList>
        <StyledButton primary raised>
          <FileDownloadIcon fill="white" />
          Download
        </StyledButton>
        <StyledButton accent raised>
          <FileUploadIcon fill="white" />
          Upload
        </StyledButton>
        <StyledFab primary raised>
          <AddIcon fill="white" />
        </StyledFab>
      </GridList>
      <StyledDivider />
      <p>To Import</p>
      <ul>
        <li>
          Find icons on <a href="https://www.material.io/icons">material.io/icons</a>
        </li>
        <li>{'convert names to camelCase'}</li>
        <li>{`e.g.: 'file download' becomes <FileDownloadIcon />`}</li>
      </ul>
      <GridList>
        <GridTile>
          <List>
            <ListSubheader>Props</ListSubheader>
            <ListItem>
              <ListItemText
                primary="fill"
                secondary="Sets the icon's fill color. Accepts css colors, hex values, rgb values, etc."
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="size" secondary="Sets the height and width of the icon." />
            </ListItem>
          </List>
        </GridTile>
      </GridList>
    </section>
  </ThemeProvider>
);

const Icons = styled(IconsPage)`
  padding: 0 30px;
`;

export default Icons;
