/**
 * @file declares mixins for the CSS only version of the
 * ripple effect. We will rely on a HOC to provide true
 * ripple effects with javascript.
 */
import { css } from 'styled-components';

const rippleEffect = radius => css`
  position: absolute;
  top: calc(50% - ${radius}%);
  left: calc(50% - ${radius}%);
  width: ${radius * 2}%;
  height: ${radius * 2}%;
  transition: opacity 250ms linear;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0,0,0,0.06);
  content: "";
`;

const rippleMixin = (radius = 100) => css`
  will-change: transform, opacity;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:after {
    transform-origin: center center;
    ${rippleEffect(radius)}
  }
  &:before {
    ${rippleEffect(radius)}
  }
  &:hover:before,
  &:focus:before,
  &:active:after {
    transition-duration: 85ms;
    opacity: .6;
  }
`;

export default rippleMixin;
