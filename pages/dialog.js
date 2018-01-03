import React, { Component } from 'react';
import Button from '../src/components/Button';
import { Dialog, DialogTitle, DialogBody, DialogFooter } from '../src/components/Dialog';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

class ExampleDialog extends Component {
  state = {
    open: false
  };

  openDialog = () => this.setState({ open: true });

  closeDialog = () => this.setState({ open: false });

  render() {
    const { open, title, body } = this.props;
    return (
      <div>
        <Dialog open={this.state.open}>
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
    )
  }
}

const DialogPage = () => (
  <MaterialThemeProvider>
    <div>
      <h1>Dialog with title</h1>
      <ExampleDialog title='Dialog title' />
      <h1>Dialog without title</h1>
      <ExampleDialog />
    </div>
  </MaterialThemeProvider>
);

export default DialogPage;
