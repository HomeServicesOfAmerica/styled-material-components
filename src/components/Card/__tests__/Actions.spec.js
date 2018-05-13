import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import {
  STYLED_COMPONENTS_CONTEXT,
  STYLED_COMPONENTS_CHILD_CONTEXT_TYPES
} from "../../../../test/utils";

import Actions from "../Actions";

describe("CardActions", () => {
  it("mounts and matches snapshot", () => {
    const mountedComponent = shallow(
      <Actions>
        <div>child 1</div>
        <div>child 2</div>
      </Actions>,
      {
        context: { ...STYLED_COMPONENTS_CONTEXT },
        childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES }
      }
    );
    expect(mountedComponent).toBeTruthy();
    expect(toJSON(mountedComponent)).toMatchSnapshot();
  });

  it("mounts and matches snapshot vertical", () => {
    const mountedComponent = shallow(
      <Actions vertical>
        <div>child 1</div>
        <div>child 2</div>
      </Actions>,
      {
        context: { ...STYLED_COMPONENTS_CONTEXT },
        childContextTypes: { ...STYLED_COMPONENTS_CHILD_CONTEXT_TYPES }
      }
    );
    expect(mountedComponent).toBeTruthy();
    expect(toJSON(mountedComponent)).toMatchSnapshot();
  });
});
