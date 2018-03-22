import * as React from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { contrastingColor } from '../../mixins/theme';

export const TabsInkBar = styled.div`
  bottom: 0;
  height: 2px;
  position: absolute;
  transition-duration: 200ms;
  transition-property: left, width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props => props.inkbarColor || props.theme.accent};
  left: ${props => props.left}px;
  width: ${props => props.width}px;
`;

export const TabBarContainer = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

class TabBarComponent extends React.PureComponent {
  static defaultProps = {
    fixed: false,
    selectedIndex: 0,
    showInkbar: true,
  };

  state = {
    inkbarPosition: {},
  };

  componentDidMount() {
    this.mounted = true;

    window.addEventListener('resize', this.resizeInkbar);
    this.resizeInkbar();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return;

    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.resizeInkbar();
    }
  }

  componentWillUnmount() {
    this.mounted = false;

    window.removeEventListener('resize', this.resizeInkbar);
  }

  nav = null;
  mounted = false;

  resizeInkbar = debounce(() => {
    const { left: navLeft } = this.nav.getBoundingClientRect();
    const { left, width } = this.nav.children[this.props.selectedIndex].getBoundingClientRect();

    this.setState({
      inkbarPosition: {
        left: left - navLeft,
        width,
      },
    });
  });

  render() {
    const { children, inkbarColor, onClick, showInkbar } = this.props;

    const tabs = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index,
        selected: this.props.selectedIndex === index,
        onClick,
      })
    );

    return (
      <TabBarContainer
        data-smc="TabBar"
        innerRef={(node) => {
          this.nav = node;
        }}
      >
        {tabs}
        {showInkbar &&
          this.mounted && (
            <TabsInkBar data-smc="TabsInkBar" inkbarColor={inkbarColor} {...this.state.inkbarPosition} />
          )}
      </TabBarContainer>
    );
  }
}

const TabsComponent = ({ className, children }) => (
  <section className={className} data-smc="Tabs">
    {children}
  </section>
);

export const TabBar = styled(TabBarComponent) ``;

export const Tabs = styled(TabsComponent) `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;

  & [data-smc~='Icon'] {
    background-color: transparent;
    color: inherit;
    fill: currentColor;
  }

  & [data-smc~='Tab'] {
    flex: ${props => (props.fixed ? 1 : 'none')};
  }

  & [data-smc='TabBar'] {
    background-color: ${({ theme }) => theme.primary};
    ${({ theme }) => contrastingColor('color', theme.primary)};
  }
`;
