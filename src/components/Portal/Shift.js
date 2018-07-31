// @flow
import React, { Component, type Node } from "react";

type ShiftPropsType = {|
  children: Node,
  className: string,
  direction: string,
  onClick: (e: SyntheticMouseEvent<HTMLDivElement>) => void,
  open?: boolean // TODO which ones?
|};

export class Shift extends Component<ShiftPropsType> {
  componentDidMount() {
    document.body.classList.add("shift");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.open && !this.props.open) {
      document.body.classList.add(this.props.direction);
    } else if (!nextProps.open && this.props.open) {
      document.body.classList.remove(this.props.direction);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("shift");
  }

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
