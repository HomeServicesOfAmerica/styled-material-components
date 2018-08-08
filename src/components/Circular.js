import styled from 'styled-components';

export const Circular = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  background: #bdbdbd;
  border-radius: 50%;
  overflow: hidden;
`;
