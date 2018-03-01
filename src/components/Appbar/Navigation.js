import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { Icon } from './Appbar';

class NavigationContainer extends Component {
  state = {
    width: 0,
    offset: 0,
    active: this.props.active,
  };

  componentDidMount() {
    this.resizeInkBar();
    window.addEventListener('resize', this.resizeInkBar);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.resizeInkBar();
    }
  }

  resizeInkBar = debounce(() => {
    const element = document.querySelector(
      `div[data-smc="AppbarNavigationItem-${this.props.active}"]`
    );
    if (!element) return;
    this.setState(() => ({
      width: element.clientWidth,
      offset: element.offsetLeft,
    }));
  }, 100);

  render() {
    return (
      <div data-smc="AppbarNavigation" className={this.props.className}>
        {this.props.children}
        <InkBar width={this.state.width} offset={this.state.offset} />
      </div>
    );
  }
}

export const InkBar = styled.div`
  background-color: ${props => props.theme.accent};
  display: block;
  height: 3px;
  position: absolute;
  bottom: 0px;
  left: ${props => props.offset}px;
  z-index: 100;
  width: ${props => props.width}px;
  transition: left 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  will-change: left;
`;

export const NavigationItem = styled.div.attrs({
  'data-smc': props => `AppbarNavigationItem-${props.navKey}`,
})`
  margin: 0 10px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const Navigation = styled(NavigationContainer)`
  display: flex;
  position: relative;
  justify-content: flex-end;
  flex-basis: 85%;
  height: 100%;
  ${Icon} + & {
    flex-basis: calc(85% - 48px);
  }
  align-items: stretch;
  align-content: stretch;
`;
