import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogBody, DialogFooter, ThemeProvider } from '../src';

class ExampleDialog extends Component {
  state = {
    open: false,
  };

  openDialog = () => this.setState({ open: true });

  closeDialog = () => this.setState({ open: false });

  render() {
    const { title } = this.props;
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.closeDialog}>
          {Boolean(title) && (
            <DialogTitle>
              {title}
            </DialogTitle>
          )}
          <DialogBody>
            Dialog body goes here
          </DialogBody>
          <DialogFooter>
            <Button onClick={this.closeDialog}>
              Cancel
            </Button>
            <Button onClick={this.closeDialog}>
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Button onClick={this.openDialog}>
          Open dialog
        </Button>
      </div>
    );
  }
}

const DialogPage = () => (
  <ThemeProvider>
    <div>
      <h1>Dialog with title</h1>
      <ExampleDialog title='Dialog title' />
      <h1>Dialog without title</h1>
      <ExampleDialog />
    </div>
  </ThemeProvider>
);

export default DialogPage;
