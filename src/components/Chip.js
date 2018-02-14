import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const ChipContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  background-color: #e0e0e0;
  height: 32px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 200;
  color: ${props => props.theme.textColors.primary};
  ${props =>
    props.clickable &&
    `
    :hover {
      background-color: #CECECE;
    }`}
  ${props => props.deletable &&
  `:hover {
    background-color: grey;
    color: white;
  }`}
  ${props =>
    props.removed &&
    `
    display: none;
  `}
`;

const Label = styled.span`
  margin: 0 12px;
`;

const DeleteIconSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0 4px 0 -8px;
  color: rgba(0, 0, 0, 0.26);
  fill: rgba(0, 0, 0, 0.26);
  :hover {
    fill: rgba(0, 0, 0, 0.4);
  }
  ${props => props.hovered && `
    fill: white;
    :hover {
      fill: white;
    }
    `
};`;

const DeleteIcon = ({ onDelete, hovered }) => (
  <DeleteIconSvg onClick={onDelete} hovered={hovered}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
  </DeleteIconSvg>
);

class ChipComponent extends PureComponent {
  state = {
    removed: false,
    hovered: false,
  }
 
  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };
   
  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleDeleteIconClick = (e) => {
    const { onDelete, deletable } = this.props;
    if (onDelete) {
      onDelete(e);
    }
    if (deletable) {
      this.setState({ removed: true });
    }
  }

  handleKeyDown = (e) => {
    const { onClick, onDelete, deletable } = this.props;
    // fire onClick when Enter or Spacebar pressed
    if (onClick && (e.keyCode === 13 || e.keyCode === 32)) {
      e.preventDefault();
      onClick(e);
      // fire onDelete when Backspace or Delete pressed
    } else if ((onDelete || deletable) && (e.keyCode === 8 || e.Keycode === 46)) {
      e.preventDefault();
      this.handleDeleteIconClick(e);
    }
  }

  render() {
    const { avatar, label, onClick, deletable, onDelete, removed: removedProp } = this.props;
    // determine if chip is managing its own removal (uncontrolled)
    // or if it's being managed by the parent (controlled)
    const removed = removedProp !== undefined ? removedProp : this.state.removed;

    return (
      <ChipContainer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        deletable={deletable}
        className="smc-chip-container"
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
        clickable={onClick}
        removed={removed}
      >
        {avatar && <Avatar className="smc-chip-avatar" ofDeletable={deletable} hovered={this.state.hovered} size={32}>{avatar}</Avatar>}
        <Label className="smc-chip-label" onClick={onClick}>
          {label}
        </Label>
        {(deletable || onDelete) && (
          <DeleteIcon className="smc-chip-delete-icon" hovered={this.state.hovered} onDelete={this.handleDeleteIconClick} />
        )}
      </ChipContainer>
    );
  }
}

export default ChipComponent;
