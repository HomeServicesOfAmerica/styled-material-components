import styled from 'styled-components';
import elevation from '../../mixins/elevation';

const Card = styled.div`
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
