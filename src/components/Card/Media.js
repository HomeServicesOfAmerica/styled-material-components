import styled, { css } from 'styled-components';

const Media = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  box-sizing: border-box;

  ${props => props.wide && css`
    background-image: url("${props.src}");
    background-size: cover;
    background-repeat: no-repeat;
    height: 12.313rem;
  `}
`;

export default Media;
