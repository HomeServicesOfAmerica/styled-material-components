import styled from 'styled-components';

const Actions = styled.section`
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  color: ${props => props.theme.textColors.primary};
  & button {
    margin: 0 8px 0 0;
    padding: 0 8px;
  }
`;

export default Actions;
