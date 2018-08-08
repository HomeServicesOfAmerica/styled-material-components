import * as React from 'react';
import styled from 'styled-components';
import typography from '../../mixins/typography';
import withRipple from '../../enhancers/withRipple';

const TabButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 72px;
  max-width: 264px;
  min-height: 48px;
  min-width: 72px;
  overflow: hidden;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  text-transform: uppercase;
  user-select: none;
  -webkit-appearance: none;
`;

const RippleTab = withRipple(TabButton);

const TabLabel = styled.span`
  padding: 4px 12px;
  ${typography('body2')};
`;

const TabComponent = ({ children, className, Icon, index, onClick }) => (
  <RippleTab className={className} onClick={event => onClick(event, index)} data-smc="Tab">
    {Icon}
    <TabLabel data-smc="TabLabel">{children}</TabLabel>
  </RippleTab>
);

export const Tab = styled(TabComponent) `
  opacity: ${props => (props.selected ? 1 : 0.7)};
  height: ${props => (props.Icon && props.children ? 72 : 48)}px;
`;

export const TabContent = styled.div`
  padding: 24px;
  width: 100%;
`;
