// @flow
import React, { type Node } from "react";

import { Circular } from "./Circular";
import { Image } from "./Image";

export type AvatarPropsType = {|
  children: Node,
  name?: string,
  src?: string
|};

const formatProps = ({
  name,
  children
}: {
  children: React.Node,
  name?: string
}): string | React.Node => {
  if (!name) {
    return children;
  } else if (name.length <= 2) {
    return name;
  }

  const nameArr = name.split(" ");
  const initials =
    nameArr.length === 1 ? nameArr[0][0] : nameArr[0][0] + nameArr[1][0];

  return initials.toUpperCase();
};

export const Avatar = Circular.extend.attrs({
  // eslint-disable-next-line react/display-name
  children: (props: AvatarPropsType): string | React.Node =>
    props.src ? <Image src={props.src} /> : formatProps(props)
})`
  // This is just here because we have to have some sort of styles applied at this level.
  text-align: left;
`;
