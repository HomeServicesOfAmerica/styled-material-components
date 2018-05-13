// @flow
/**
 * @file declares mixins for the CSS only version of the
 * ripple effect. We will rely on a HOC to provide true
 * ripple effects with javascript.
 */
import { css } from "styled-components";

const rippleEffect = (
  radius: number,
  color: string = "rgba(0,0,0,0.06)"
): string => css`
  position: absolute;
  top: calc(50% - ${radius}%);
  left: calc(50% - ${radius}%);
  width: ${radius * 2}%;
  height: ${radius * 2}%;
  transition: opacity 250ms linear;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  background-color: ${color};
  content: "";
`;

const rippleMixin = (radius: number = 100, color: string) => css`
  will-change: transform, opacity;
  &:after {
    transform-origin: center center;
    ${rippleEffect(radius, color)};
  }
  &:before {
    ${rippleEffect(radius, color)};
  }
  &:hover:before,
  &:focus:before,
  &:active:after {
    transition-duration: 85ms;
    opacity: 0.6;
  }
`;
export default rippleMixin;
