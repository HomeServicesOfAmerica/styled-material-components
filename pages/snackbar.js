import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Button, Snackbar } from '../src';

class SnackbarPage extends PureComponent {
  state = {
    open: false,
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <ThemeProvider theme={{ primary: '#03A9F4' }}>
        <div className={this.props.className}>
          <h1>Snackbar</h1>
          <ul>
            <li>open - boolean to open snackbar</li>
            <li>onRequestClose - function that sets open to false</li>
            <li>message -
              string for snackbar message. can alternatively pass in children to Snackbar</li>
            <li>autoHideDuration - pass in number in milliseconds; default is 4 seconds</li>
          </ul>
          <Button primary raised onClick={() => this.setState({ open: true })}>
            Open a basic snackbar
          </Button>
          <Snackbar
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoHideDuration={1500}
            message='this is a foodless snackbar :(' />
        </div>
      </ThemeProvider>
    );
  }
}

const StyledSnackbarPage = styled(SnackbarPage)`
  margin: 0 10%;
  width: 80%;
`;

export default StyledSnackbarPage;
