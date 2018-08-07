import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Portal } from '../Portal';

import {
  STYLED_COMPONENTS_CONTEXT,
  STYLED_COMPONENTS_CHILD_CONTEXT_TYPES,
} from '../../../../test/utils';

describe('Portal', () => {
  let mounted;
  it('mounts', () => {
    mounted = shallow(
      <Portal
        className="test-class"
        renderContents={() => <div>portal content </div>}
      >
        Content stuff!
      </Portal>,
      {
        context: { ...STYLED_COMPONENTS_CONTEXT },
        childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES },
      },
    );
    expect(mounted).toBeTruthy();
  });

  it.skip('matches snapshot', () => {
    // TODO fix that this is returning undefined
    expect(toJSON(mounted)).toMatchSnapshot();
  });

  it.skip('creates a portal on mount', () => {});

  it.skip('defaults to an overlay', () => {});

  it.skip('can create a shift (defaulting to left direction)', () => {});

  it.skip('allows its direction to be overridden', () => {});

  it.skip('renders the content specified in its renderContents props', () => {});

  it.skip('passes its prop onRequestClose to its child as onClick', () => {});

  it.skip('on open sets document.body.overflowY to "hidden"', () => {});

  it.skip('on close, returns document.body.overflowY to whatever it was before', () => {});

  it.skip('removes the portal on unmount', () => {});
});
