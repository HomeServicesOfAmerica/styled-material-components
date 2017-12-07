import React from 'react';
import styled from 'styled-components';
import elevation from '../../mixins/elevation';

const CardComponent = props => (
  <div className={`${props.className} smc-card`}>{props.children}</div>
);

const Card = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  ${elevation(2)};
  &:hover {
    ${elevation(8)};
  }
`;

export default Card;
