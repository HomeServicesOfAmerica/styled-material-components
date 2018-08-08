import React, { Component } from 'react';
import { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
  to {
    opacity  : 0;
    transform: scale(2);
  }
`;

const withRipple = (ComposedComponent) => {
  const RippledComponent = ComposedComponent.extend`
    position: relative;
    overflow: hidden;

    & .ripple-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    & .ripple-container span {
      transform: scale(0);
      border-radius: 100%;
      position: absolute;
      opacity: 0.75;
      background-color: #fff;
      animation: ${rippleAnimation} 1000ms;
    }
  `;
  return class RippleEnabledComponent extends Component {
    /**
     * When a button click occurs, add a span element that will receive
     * the styling to create the 'ripple' effect and animate it moving
     * across the parent container.
     */
    handleClick = (event) => {
      const ripple = event.target;
      const size = ripple.offsetWidth;
      const pos = ripple.getBoundingClientRect();
      const rippler = document.createElement('span');
      const x = event.pageX - pos.left - (size / 2);
      const y = event.pageY - pos.top - (size / 2);
      const style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
      this.rippleContainer.appendChild(rippler);
      rippler.setAttribute('style', style);
    };

    /**
     * debounced function to remove all span elements inside the ripple
     * container. This is to prevent build up of span elements after they
     * have been animated out of view.
     */
    reset = () => {
      if (this.clear) clearTimeout(this.clear);
      this.clear = setTimeout(() => {
        while (this.rippleContainer && this.rippleContainer.firstChild) {
          this.rippleContainer.removeChild(this.rippleContainer.firstChild);
        }
      }, 2000);
    };

    render() {
      return (
        <RippledComponent {...this.props} onMouseDown={this.handleClick} onMouseUp={this.reset}>
          {this.props.children}
          <div ref={(rippleContainer) => {this.rippleContainer = rippleContainer;}} className="ripple-container" />
        </RippledComponent>
      );
    }
  };
};

export default withRipple;
