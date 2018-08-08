import React from 'react';
import styled, { css } from 'styled-components';
import { Row } from '../FlexGrid';
import { contrastingColor } from '../../mixins/theme';
import typography, { overflowEllipsis } from '../../mixins/typography';
import elevation from '../../mixins/elevation';

const toolbarSectionStyles = css`
  display: inline-flex;
  flex: 1;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  padding: 8px;
  z-index: 1;
`;

const TitleContainer = styled.section`
  ${toolbarSectionStyles}
  justify-content: flex-start;
  order: -1;
  padding-left: 12px;
  padding-right: 0px;
`;

const ToolbarTitleComponent = ({ children, className, Icon }) => (
  <TitleContainer>
    {Icon && Icon}
    <span className={className}>
      {children}
    </span>
  </TitleContainer>
);

export const ToolbarTitle = styled(ToolbarTitleComponent)`
  ${typography('title')}
  ${overflowEllipsis}
  align-self: center;
  padding: 12px 0;
  line-height: 1.5rem;
  z-index: 1;
  margin: 0;
  margin-left: ${({ theme }) => theme.toolbar.horizontalPaddingDesktop};
`;

export const ToolbarActions = styled.section`
  ${toolbarSectionStyles}
  justify-content: flex-end;
  order: 1;
  padding-left: 0px;
  padding-right: 12px;
`;

const ToolbarRedux = ({ className, children }) => (
  <header className={className} data-smc="Toolbar">
    <Row horizontal="center">
      {children}
    </Row>
  </header>
);

const fixedToolbarMixin = css`
  ${elevation(4)}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const Toolbar = styled(ToolbarRedux)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  ${({ theme }) => contrastingColor('color', theme.primary)}

  ${props => props.fixed && fixedToolbarMixin}

  & ${Row} {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 64px;
  }

  & [data-smc~=Icon] {
    display: flex;
    position: relative;
    align-items: start;
    align-self: center;
    justify-content: center;
    width: ${({ theme }) => theme.toolbar.iconSize};
    height: ${({ theme }) => theme.toolbar.iconSize};
    padding: ${({ theme }) => theme.toolbar.iconPadding};
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  & [data-smc~=Icon] + ${ToolbarTitle} {
    margin-left: 8px;
  }
`;
