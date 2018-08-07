// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type CardActionsPropsType = {|
  children: Node,
  className: string,
  vertical?: boolean,
|};

const ActionsComponent = (props: CardActionsPropsType) => (
  <section className={`${props.className} card-actions`}>
    {props.children}
  </section>
);

const Actions = styled(ActionsComponent)`
  display: flex;
  box-sizing: border-box;
  padding: 8px;
  color: ${props => props.theme.textColors.primary};
  & button {
    margin: 0 8px 0 0;
  }
  ${props =>
    props.vertical &&
    `
    flex-flow: column;
    align-items: flex-start;
    & button {
      margin: 0 0 4px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  `};
`;

export default Actions;
