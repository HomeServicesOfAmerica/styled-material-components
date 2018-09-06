import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MaterialThemeProvider, Chip, ChipAvatar, ChipLabel, ChipDeleteIcon, ArrowDropDownIcon } from '../dist/styled-material-components.esm.js';

const demo = (area) => {
  // eslint-disable-next-line
  alert(`You clicked on the ${area}`);
};

const CustomChip = styled(Chip)`
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

const CustomRenderProp = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2px;
  margin: auto 10px;
  div {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: red;
    margin: -2px 0 0 5px;
  }
`;

const ChipRenderProp = () =>
  <CustomRenderProp>With Render Prop For Label <div /></CustomRenderProp>;

export default class ChipsPage extends PureComponent {
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
          <Chip label={ChipRenderProp} />
          <Chip
            label="Custom Remove icon"
            removeIcon={ArrowDropDownIcon}
            onDelete={() => demo('delete icon')}
          />
        </div>
      </MaterialThemeProvider>
    );
  }
}
