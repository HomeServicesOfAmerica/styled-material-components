import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Button, Snackbar } from '../src';

class SnackbarPage extends PureComponent {
  state = {
    single: false,
    multi: false,
  };

  handleClose = type => this.setState({ [type]: false });

  openMultiLineSnackBar = () => {
    this.setState({ multi: true });
  };

  openSingleSnackBar = () => {
    this.setState({ single: true });
  };

  render() {
    return (
      <ThemeProvider>
        <div className={this.props.className}>
          <h1>Snackbar</h1>
          <ul>
            <li>open - boolean to open snackbar</li>
            <li>onRequestClose - function that sets open to false</li>
            <li>
              message - string for snackbar message. can alternatively pass in children to Snackbar
            </li>
            <li>autoHideDuration - pass in number in milliseconds; default is 4 seconds</li>
            <li>
              multiline - boolean to make snackbar display two lines instead of one. Only works when
              the device is using a mobile-sized viewport
            </li>
          </ul>
          <StyledButton primary raised onClick={this.openSingleSnackBar}>
            Open a basic snackbar
          </StyledButton>
          <StyledButton primary raised onClick={this.openMultiLineSnackBar}>
            Open a multi-line snackbar
          </StyledButton>
          <Snackbar
            open={this.state.single}
            onRequestClose={() => this.handleClose('single')}
            autoHideDuration={1500}
            message="this is a foodless snackbar :("
          />
          <Snackbar
            open={this.state.multi}
            multiline
            onRequestClose={() => this.handleClose('multi')}
            autoHideDuration={1500}
            message="This snackbar will display multiple lines on a mobile device, provided that the snackbar message is of a certain length. Multi-line snackbars are triggered with the 'multiline' prop."
          />
        </div>
      </ThemeProvider>
    );
  }
}

const StyledSnackbarPage = styled(SnackbarPage)`
  margin: 0 10%;
`;

const StyledButton = Button.extend`
  margin: 0 24px 24px 0;
`;

export default StyledSnackbarPage;
