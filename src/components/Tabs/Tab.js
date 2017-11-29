import React from 'react';
import styled, { css } from 'styled-components';

const customBackgroundColor = css`${props => (props.selected ? props.activeBackgroundColor : props.passiveBackgroundColor)}`;
const themeBackgroundColor = css`${props => (props.selected ? props.theme.primary : props.theme.white)}`;
const customFontColor = css`${props => (props.selected ? props.activeFontColor : props.passiveFontColor)}`;
const themeFontColor = css`${props => (props.selected ? props.theme.textColors.primary : props.theme.textColors.secondary)}`;

const TabContainer = styled.a`
  font-family: lato, sans-serif;
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  display: table-cell;
  box-sizing: border-box;
  min-height: 48px;
  height: 48px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  vertical-align: middle;
  color: ${props => (props.activeFontColor && props.passiveFontColor ? customFontColor : themeFontColor)};
  background-color: ${props => (props.activeBackgroundColor && props.passiveBackgroundColor ? customBackgroundColor : themeBackgroundColor)};
  opacity: ${props => (props.selected ? 1 : 0.87)};
  width: ${props => props.tabWidth};
  &:hover {
    opacity: 1;
  }
`;

const TabComponent = ({
  label,
  icon,
  selected,
  onClick,
  index,
  tabWidth,
  activeBackgroundColor,
  passiveBackgroundColor,
  activeFontColor,
  passiveFontColor,
}) => (
  <TabContainer
    className='smc-tab'
    onClick={() => onClick(index)}
    selected={selected}
    tabWidth={`${tabWidth}px`}
    activeBackgroundColor={activeBackgroundColor}
    passiveBackgroundColor={passiveBackgroundColor}
    activeFontColor={activeFontColor}
    passiveFontColor={passiveFontColor}>
    {icon || null}
    {label}
  </TabContainer>
);

const Tab = styled(TabComponent)``;

export default Tab;
