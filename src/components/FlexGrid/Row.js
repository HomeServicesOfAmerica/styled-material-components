/**
 * @file Row
 * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
 * @description Defines a flex grid row that has props defined for
 * easily setting some common flex styles.
 */
import React, { Component, createContext } from 'react';
import styled from 'styled-components';
import { rowMixin } from '../../mixins/flex';

const RowContext = createContext({
  horizontal: 'left',
  vertical: 'middle',
  distribution: null,
  stretch: null,
});

/**
 * RowConsumer
 *
 * This part of the context is a component that must have a single child
 * that is a function. This function is called at render with the value
 * defined in the RowProvider as an argument.
 */
export const RowConsumer = RowContext.Consumer;

/**
 * RowProvider
 *
 * This part of thd context is a React Component that sets the values that
 * will be accessible to any RowConsumer within it's tree.
 */
const RowProvider = RowContext.Provider;

class RowComponent extends Component {
  // Initial state is inherited from props
  state = {
    horizontal: this.props.horizontal,
    vertical: this.props.vertical,
    distribution: this.props.distribution,
    stretch: this.props.stretch,
  };

  componentWillReceiveProps(nextProps) {
    // Anytime our props of interest change we need to update state
    // This is so that the context is kept up to date.
    const newState = {};
    if (this.props.horizontal !== nextProps.horizontal) {
      newState.horizontal = nextProps.horizontal;
    }
    if (this.props.vertical !== nextProps.vertical) {
      newState.vertical = nextProps.vertical;
    }
    if (this.props.distribution !== nextProps.distribution) {
      newState.distribution = nextProps.distribution;
    }
    if (this.props.stretch !== nextProps.stretch) {
      newState.stretch = nextProps.stretch;
    }
    if (Object.keys(newState).length) this.setState(newState);
  }

  render() {
    return (
      <RowProvider value={this.state}>
        <div data-smc="Row" className={this.props.className}>
          {this.props.children}
        </div>
      </RowProvider>
    );
  }
}

export const Row = styled(RowComponent)`
  ${props => rowMixin(props)};
`;

export function withRowState(WrappedComponent) {
  const ComponentWithRowState = props => (
    <RowConsumer>{rowState => <WrappedComponent {...props} rowState={rowState} />}</RowConsumer>
  );
  const name = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithRowState.displayName = `withRowState(${name})`;
  return ComponentWithRowState;
}
