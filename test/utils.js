import PropTypes from 'prop-types';

import { defaultTheme } from '../src';

/*
 * Basically just copy
 */
const createBroadcast = initialState => {
  const listeners = {};
  let id = 0;
  const state = initialState;

  function subscribe(listener) {
    const currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { subscribe, unsubscribe };
};

const broadcast = createBroadcast(defaultTheme);

const CHANNEL = '__styled-components__';
const CHANNEL_NEXT = `${CHANNEL}next__`;

export const STYLED_COMPONENTS_CONTEXT = {
  // theme: defaultTheme,
  [CHANNEL_NEXT]: {
    getTheme: () => defaultTheme,
    subscribe: broadcast.subscribe,
    unsubscribe: broadcast.unsubscribe,
  },
};

export const STYLED_COMPONENTS_CHILD_CONTEXT_TYPES = {
  // theme: PropTypes.object,
  [CHANNEL_NEXT]: PropTypes.object,
};
