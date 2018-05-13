import { configure } from 'enzyme';

import 'jest-styled-components';

// This is temporary until enzyme is updated for 16.3
import Adapter from './reactSixteenAdapter';

/*
  This is necessary to avoid an error when trying to call react-ga
  inside pageEnhancer
*/
jest.mock('platform', () => ({
  product: 'testProduct',
  os: {
    family: 'testFamily',
    version: '1.1',
  },
}));

window.matchMedia = query => {
  const getWindowPixels = mediaQuery => {
    if (mediaQuery.includes('em')) {
      const DEFAULT_FONT_SIZE = 16;
      const em = parseInt(
        mediaQuery
          .split(':')[1]
          .split('em')[0]
          .trim(),
        10,
      );
      return em * DEFAULT_FONT_SIZE;
    }
    return parseInt(
      mediaQuery
        .split(':')[1]
        .split('px')[0]
        .trim(),
      10,
    );
  };

  const pixelsMatch = px => {
    const checkingMin = query.includes('min-width');
    const checkFunction = pixels =>
      checkingMin ? pixels < window.innerWidth : pixels > window.innerWidth;
    return checkFunction(px);
  };

  const matches = pixelsMatch(getWindowPixels(query));

  return {
    matches,
    addListener: () => {},
    removeListener: () => {},
  };
};

configure({ adapter: new Adapter() });
