import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Shift } from '../Shift';

import {
  STYLED_COMPONENTS_CONTEXT,
  STYLED_COMPONENTS_CHILD_CONTEXT_TYPES,
} from '../../../../test/utils';

describe('Shift', () => {
  let mounted;
  it('mounts', () => {
    mounted = shallow(<Shift className="testclass">Content stuff!</Shift>, {
      context: { ...STYLED_COMPONENTS_CONTEXT },
      childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES },
    });
    expect(mounted).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(toJSON(mounted)).toMatchSnapshot();
  });

  it.skip('renders its children as content', () => {});

  it.skip('adds a "shift" class to the document body on mount', () => {});

  it.skip('when opened, adds its direction as a class  to the document body', () => {});

  it.skip('when closed, removes its direction class', () => {});

  it.skip('removes the "shift" class from the document body on unmount', () => {});
});
