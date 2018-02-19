import React from 'react';
import styled from 'styled-components';
import Button from '../src/components/Button';
import FloatingActionButton from '../src/components/FloatingActionButton';
import withRipple from '../src/enhancers/withRipple';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const RippleButton = withRipple(Button);

const icon =
  (<svg viewBox="0 0 24 24" style={{ fill: '#fff', height: '24px', width: '24px' }} >
    <path fill="#FFF" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>);


const ButtonsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Flat Buttons</h1>
      <Button onClick={() => alert('On Click Fired')}>Flat</Button>
      <Button primary>Flat Primary</Button>
      <Button accent>Flat Accent</Button>
      <Button disabled primary onClick={() => alert('This should not fire')}>Disabled</Button>
      <RippleButton>JS Ripple</RippleButton>
      <h1>Raised Buttons</h1>
      <Button raised>Raised</Button>
      <Button raised accent>Accent</Button>
      <Button raised primary disabled onClick={() => alert('This should not fire')}>Disabled</Button>
      <RippleButton raised primary>JS Ripple</RippleButton>
      <h1>Floating Action Buttons</h1>
      <FloatingActionButton primary>{icon}</FloatingActionButton>
      <FloatingActionButton primary mini>{icon}</FloatingActionButton>
      <FloatingActionButton accent>{icon}</FloatingActionButton>
      <FloatingActionButton accent mini>{icon}</FloatingActionButton>
      <FloatingActionButton disabled>{icon}</FloatingActionButton>
      <FloatingActionButton disabled mini>{icon}</FloatingActionButton>

    </div>
  </MaterialThemeProvider>
);

const StyledButtonsPage = styled(ButtonsPage)`
  & button {
    margin: 16px;
  }
`;

export default StyledButtonsPage;
