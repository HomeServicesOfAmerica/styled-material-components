import React from 'react';
import styled, { css } from 'styled-components';
import { Column, Row } from '../FlexGrid';
import typography from '../../mixins/typography';
import elevation from '../../mixins/elevation';

export const AppbarIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 12px;
`;

export const AppbarTitle = styled.h1.attrs({
  'data-smc': 'AppbarTitle',
  height: props => (props.dense ? 48 : 64),
  width: props => (props.double ? 100 : 15),
})`
  margin: 0 12px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  flex: 1;
  ${typography('title')}
`;

const AppbarComponent = ({ className, title, navIcon, children, dense, double = false }) => (
  <header className={className} data-smc="Appbar">
    <Column size={12} noGutters>
      <Row stretch>
        <Column noGutters size={3}>
          {navIcon && <AppbarIcon><navIcon /></AppbarIcon>}
          <AppbarTitle double={double} dense={dense}>{title}</AppbarTitle>
        </Column>
        {!double && (
          <Column size={9} noGutters>
            <Row horizontal="right" vertical="middle" relative>
              {children}
            </Row>
          </Column>
        )}
      </Row>
      {double && (
        <Row horizontal="left" vertical="middle" relative>
          {children}
        </Row>
      )}
    </Column>
  </header>
);

const sizeByScale = (dense, double) => {
  let height = dense ? 48 : 64;
  if (double) height *= 2;
  return css`
    height: ${height}px;
  `;
};

export const Appbar = styled(AppbarComponent)`
  align-items: ${props => (props.double ? 'left' : 'center')};
  padding: 0 24px;
  background-color: ${props => props.theme.primary};
  ${elevation(2)}
  ${props => sizeByScale(props.dense, props.double)}
  color: #fff;
`;
