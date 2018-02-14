import React, { PureComponent } from 'react';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import Chip from '../src/components/Chip';

const demo = (area) => {
  alert(`You clicked on the ${area}`);
};

class ChipsPage extends PureComponent {
  state = {
    removed: false,
  }

  handleRemove = () => {
    this.setState({ removed: true });
  }

  render() {
    const { className } = this.props;
    const { removed } = this.state;

    return (
      <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
        <div className={className}>
          <h1>Chips</h1>
          <Chip label="Normal Chip" />
          <Chip label="Clickable Chip" onClick={() => demo('chip')} />
          <Chip label="With Avatar" avatar="PG" />
          <Chip label="Clickable with Avatar" avatar="AP" onClick={() => demo('chip')} />
          <Chip label="Deletable Chip" deletable onDelete={() => demo('delete icon')} />
          <Chip label="Clickable and Deletable Chip" deletable onClick={() => demo('chip')} onDelete={() => demo('delete icon')} />
          <Chip label="Deletable Chip with Avatar" deletable avatar="BB" onDelete={() => demo('delete icon')} />
          <Chip label="Uncontrolled Deletable Chip" deletable avatar="CA" />
          <Chip label="Controlled Deletable Chip" deletable onDelete={this.handleRemove} removed={removed} />
        </div>
      </MaterialThemeProvider>
    );
  }
}

export default ChipsPage;
