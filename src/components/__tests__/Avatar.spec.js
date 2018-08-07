import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import {
  STYLED_COMPONENTS_CONTEXT,
  STYLED_COMPONENTS_CHILD_CONTEXT_TYPES,
} from '../../../test/utils';

import { Avatar } from '../Avatar';

describe('Avatar with src prop', () => {
  let mounted;
  it('mounts', () => {
    const mounted = shallow(<Avatar src="test.jpg" />, {
      context: { ...STYLED_COMPONENTS_CONTEXT },
      childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES },
    });
    expect(mounted).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(toJSON(mounted)).toMatchSnapshot();
  });

  it.skip('renders an image with the src provided', () => {});
});
