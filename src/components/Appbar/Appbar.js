import React from 'react';
import styled from 'styled-components';
import typography from '../../mixins/typography';
import elevation from '../../mixins/elevation';

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin: 12px;
`;

export const Title = styled.h1.attrs({
  'data-smc': 'AppbarTitle',
})`
  margin: 0 12px;
  ${typography('title')}
  ${Icon} + & {
    flex-basis: calc(15% - 48px);
  }
`;


const AppbarComponent = ({ className, title, navIcon, children }) => (
  <div className={className} data-smc="Appbar">
    {navIcon && <Icon><navIcon /></Icon>}
    <Title>{title}</Title>
    {children}
  </div>
);

export const Appbar = styled(AppbarComponent)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: ${props => props.theme.primary};
  ${elevation(2)}
  height: 64px;
  color: #fff;
`;
