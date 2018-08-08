import React from 'react';
import styled, { css } from 'styled-components';
import elevation from '../../mixins/elevation';

const CardComponent = ({ className, children }) => (
  <div className={`${className} smc-card`}>{children}</div>
);

const hoverStyles = css`
  &:hover {
    ${elevation(8)};
    transform: translateY(-7px);
  }
`;

const Card = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  ${elevation(2)};
  transition-duration: 0.3s;
  ${props => props.hover && hoverStyles}
`;

Card.defaultProps = {
  hover: false,
};

export default Card;
