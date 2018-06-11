import React from 'react';
import styled from 'styled-components';
import {
  Avatar,
  ThemeProvider,
} from '../src';

const StyledAvatar = styled(Avatar)`
  color: tomato;
  font-size: 24px;
  background: linear-gradient(to right, #71B280, #134E5E);
`;

const CodeBlock = styled.div`
  background-color: lightgray;
  font-family: monospace;
  width: 300px;
  padding: 10px 0;
  margin: 10px 0;
`;

const AvatarsPage = () => (
  <ThemeProvider theme={{ primary: '#03A9F4' }}>
    <h1>Avatars</h1>
        Avatars can accept first and last name and return initials
    <CodeBlock> {'<Avatar name="Bruce Wayne" />'}</CodeBlock>
    <Avatar name="Bruce Wayne" />
    <br />
        Or one name
    <CodeBlock> {'<Avatar name="Spiderman" />'}</CodeBlock>
    <Avatar name="Spiderman" />
    <br />
        Or just initials
    <CodeBlock> {'<Avatar name="AW" />'}</CodeBlock>
    <Avatar name="AW" />
    <br />
        They can be different sizes
    <CodeBlock> {'<Avatar name="AW" size={64} />'}</CodeBlock>
    <Avatar name="AW" size={64} />
    <br />
        Have extended styles
    <CodeBlock> {'<StyledAvatar size={64} name="HI" />'}</CodeBlock>
    <StyledAvatar size={64} name='HI' />
        Or accept an image src
    <CodeBlock> {'<Avatar size={128} src="https://bit.ly/2GErNQL" />'}</CodeBlock>
    <Avatar size={128} src='https://bit.ly/2GErNQL' />
  </ThemeProvider>
);

const StyledAvatarsPage = styled(AvatarsPage)`
  padding: 30px;

`;

export default StyledAvatarsPage;
