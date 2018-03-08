import React, { PureComponent } from 'react';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import { Chip, ChipAvatar, ChipLabel, ChipDeleteIcon } from '../src/components/Chip';

const demo = (area) => {
  // eslint-disable-next-line
  alert(`You clicked on the ${area}`);
};

const CustomChip = Chip.extend`
  ${ChipAvatar} {
    background-color: skyblue;
  }

  ${ChipLabel} {
    font-weight: 800;
  }

  ${ChipDeleteIcon} {
    :hover {
      fill: tomato;
    }
    fill: violet;
  }
`;

class ChipsPage extends PureComponent {
  state = {
    removed: false,
  };

  handleRemove = () => {
    this.setState({ removed: true });
  };

  render() {
    const { className } = this.props;
    const { removed } = this.state;

    return (
      <MaterialThemeProvider>
        <div className={className}>
          <h1>Chips</h1>
          <Chip primary label="Normal Chip" />
          <Chip accent label="Clickable Chip" onClick={() => demo('chip')} />
          <Chip label="With Avatar" avatar="PG" />
          <Chip accent label="Clickable with Avatar" avatar="AP" onClick={() => demo('chip')} />
          <Chip accent label="Deletable Chip" onDelete={() => demo('delete icon')} />
          <Chip
            label="Clickable and Deletable Chip"
            onClick={() => demo('chip')}
            onDelete={() => demo('delete icon')}
          />
          <Chip
            label="Deletable Chip with Avatar"
            avatar="BB"
            onDelete={() => demo('delete icon')}
          />
          <Chip label="Uncontrolled Deletable chip" removable avatar="CA" />
          <Chip label="Controlled Deletable chip" onDelete={this.handleRemove} removed={removed} />
          <CustomChip label="Custom Chip" avatar="AB" removable />
        </div>
      </MaterialThemeProvider>
    );
  }
}

export default ChipsPage;
