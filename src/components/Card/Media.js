// @flow
import React, { type Node } from "react";
import styled, { css } from "styled-components";

type CardMediaPropsType = {|
  children: Node,
  className: string,
  src: string
|};

const MediaComponent = (props: CardMediaPropsType) => (
  <section className={`${props.className} card-media`}>
    {props.children}
  </section>
);

const Media = styled(MediaComponent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 16px;

  ${props =>
    props.wide &&
    css`
    background-image: url("${props.src}");
    background-size: cover;
    background-repeat: no-repeat;
    height: 12.313rem;
  `};
`;

export default Media;
