import React from 'react';
import styled from 'styled-components';
import elevation from '../../mixins/elevation';

const CardComponent = ({ hover, className, children }) => (
  <div hover={hover} className={`${className} smc-card`}>{children}</div>
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
    ${props => props.hover && elevation(8)};
  }
`;

Card.defaultProps = {
  hover: false,
};

export default Card;
