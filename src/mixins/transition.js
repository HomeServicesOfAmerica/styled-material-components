import platform from 'platform';
import { css } from 'styled-components';

const isMobile = platform.os.family.match(/^(Android|iOS|Windows Phone)$/);

export const durations = {
  complex: css`
    transition-duration: ${isMobile ? 375 : 200}ms;
  `,
  standard: css`
    transition-duration: ${isMobile ? 300 : 150}ms;
  `,
  enteringScreen: css`
    transition-duration: 225ms;
  `,
  leavingScreen: css`
    transition-duration: 195ms;
  `,
};

export const easingCurves = {
  standard: css`
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `,
  deceleration: css`
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  `,
  acceleration: css`
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  `,
  sharp: css`
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  `,
};

export const transition = (duration = 'standard', easing = 'standard') => css`
  ${durations[duration]};
  ${easingCurves[easing]};
`;
