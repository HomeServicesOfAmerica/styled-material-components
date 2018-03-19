/**
 * @file ScreenSizeContext
 * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
 * @author Ari Frankel <ari.l.frankel@gmail.com|ari@merlinlabs.com>
 * @description Defines a context that will allow all children to
 * access the current screenSize. This is implmented using respondable.
 * All breakpoints are adjustable by the end user.
 */
import React, { Component } from 'react';
import createReactContext from 'create-react-context';
import { withTheme } from 'styled-components';
import respondable from 'respondable';
import platform from 'platform';

/**
 * Context
 *
 * createReactContext is a polyfill for the new context api landing
 * soon in React. It creates a flux like architecture using react's
 * state instead of an external state system. the purpose of this
 * context is to be able to provide any subcomponent access to the
 * screenSize state. This allows any component that needs to to adjust
 * their styles based on screenSize.
 */
const Context = createReactContext({ size: 'server' });

/**
 * ScreenSizeConsumer
 *
 * This part of the context is a component that must have a single child
 * that is a function. This function is called at render with the value
 * defined in the Context.Provider as an argument.
 */
export const ScreenSizeConsumer = Context.Consumer;

class ScreenSizeContextBase extends Component {
  state = {
    screenSize: 'server',
    platformData: {},
  };

  componentDidMount() {
    // Get platform data using Platform
    // It is necessary to capture the platform data on the client.
    // Platform relies on window.navigator.
    // eslint-disable-next-line
    this.setState({
      platformData: {
        product: platform.product,
        osFamily: platform.os ? platform.os.family : null,
        majorVersion: platform.version ? parseInt(platform.version.split('.')[0], 10) : -1,
        majorOsVersion: platform.os && platform.os.version ? parseInt(platform.os.version.split('.')[0], 10) : -1,
      },
    });
    // Initialize Respondable
    // first prop is a map in the form of [mediaQuery]: 'string'
    // If the mediaQuery matches, 'string' will be returned as active.
    // Second prop is a callback method to fire when size changes.
    // Third prop is an array specifying the priority of mediaQueries
    this.destroy = respondable(
      this.props.theme.layout.screenSizes,
      this.setScreenSize,
      this.props.theme.layout.screenSizePriority
    );
  }

  componentWillUnmount() {
    // Destroy the respondable listener
    this.destroy && this.destroy();
  }

  /**
   * getNextHighestScreenSize
   *
   * this method uses the priorities of screenSizes in the theme
   * to determine which screenSize would be the next highest one
   * relative to the current size. This might be useful for context
   * consumers.
   *
   * @param {String} active current active screenSize
   */
  getNextHighestScreenSize = (active) => {
    const index = this.props.theme.layout.screenSizePriority.indexOf(active);
    if (index !== 0) return this.props.theme.layout.screenSizePriority[index - 1];
    return active;
  };

  /**
   * getNextLowestScreenSize
   *
   * this method uses the priorities of screenSizes in the theme
   * to determine which screenSize would be the next lowest one
   * relative to the current size. Columns attempt to match the lower
   * screenSize props when the curren screenSize isn't defined.
   *
   * @param {String} active current active screenSize
   */
  getNextLowestScreenSize = (active) => {
    const index = this.props.theme.layout.screenSizePriority.indexOf(active);
    const length = this.props.theme.layout.screenSizePriority.length;
    if (index !== (length - 1)) return this.props.theme.layout.screenSizePriority[index + 1];
    return active;
  };

  /**
   * setScreenSize
   *
   * this method is a thin wrapper around setState for setting
   * the appropriate screenSizes into the context state. This is
   * used as the respondable callback method. Anytime screensize
   * changes this method will be called.
   *
   * Note: we use largest instead of active prop as active because
   * media queries defined in userland might be competing. Respondable
   * api always provides the largest param even if queries do not
   * compete. largest is the largest active screenSize.
   *
   * @param {String} active  current active screenSize
   * @param {String} largest largest of active screenSizes if any compete
   */
  setScreenSize = (active, largest) => this.setState({
    screenSize: largest,
    lowerScreenSize: this.getNextLowestScreenSize(largest),
    higherScreenSize: this.getNextHighestScreenSize(largest),
  });

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

// withTheme gives us access to the theme without it being a Styled Component
export const ScreenSizeContext = withTheme(ScreenSizeContextBase);

export const withScreenSize = fn => (props, context = {}) => (
  <ScreenSizeConsumer>
    {screenSizeState => fn(props, { ...context, screenSizeState })}
  </ScreenSizeConsumer>
);
