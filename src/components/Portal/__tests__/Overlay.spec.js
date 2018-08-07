import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Overlay } from '../Overlay';

import {
  STYLED_COMPONENTS_CONTEXT,
  STYLED_COMPONENTS_CHILD_CONTEXT_TYPES,
} from '../../../../test/utils';

describe('Overlay', () => {
  let mounted;
  const onClick = jest.fn();
  it('mounts', () => {
    mounted = shallow(<Overlay onClick={onClick}>Content stuff!</Overlay>, {
      context: { ...STYLED_COMPONENTS_CONTEXT },
      childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES },
    });
    expect(mounted).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(toJSON(mounted)).toMatchSnapshot();
  });

  it.skip('renders its children as content', () => {});

  it.skip('fires onClick handler when the overlay is clicked', () => {});

  it.skip('does not fire onClick handler when the content is clicked', () => {});
});
