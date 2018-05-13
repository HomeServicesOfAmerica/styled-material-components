// @flow
import React, { type Node } from "react";
import styled, { css } from "styled-components";

import typography from "../../mixins/typography";

type CardTitlePropsType = {|
  children: Node,
  className: string,
  large?: boolean
|};

const TitleComponent = (props: CardTitlePropsType) => (
  <h1 className={`${props.className} card-title`}>{props.children}</h1>
);

const Title = styled(TitleComponent)`
  ${typography("body2")} margin: -.063rem 0;
  color: ${props => props.theme.textColors.primary};

  ${props =>
    props.large &&
    css`
      ${typography("headline")} margin: 0;
    `} .primary & {
    ${props =>
      props.large &&
      css`
        padding-top: 8px;
      `};
  }
`;

export default Title;
