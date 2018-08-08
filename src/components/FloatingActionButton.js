import styled, { css } from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';
import ripple from '../mixins/ripple';

const primary = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
  color: #fff;
    background-color: ${props => props.theme.primary};
`;

const accent = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
  color: #fff;
    background-color: ${props => props.theme.accent};
`;

const disabled = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
  background-color: rgba(0, 0, 0, .12);
    pointer-events: none;
`;

const mini = css`
  height: 40px;
  width: 40px;
`;

const FloatingActionButton = styled.button.attrs({
  'data-smc': 'FloatingActionButton',
})`
  color: #fff;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  background: transparent;
  overflow: hidden;
  user-select: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  ${elevationTransition}

  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    overflow: hidden;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  ${ripple()}
  ${props => props.accent && accent}
  ${props => props.primary && primary}
  ${props => props.disabled && disabled}
  ${props => props.mini && mini}
`;

export default FloatingActionButton;
