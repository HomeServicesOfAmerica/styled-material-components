import styled from 'styled-components';

const BackdropComponent = props => (
  <div className={`${props.className} smc-backdrop`}>{props.children}</div>
);

const Backdrop = styled(BackdropComponent)`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
  color: ${props => props.theme.textColors.primary};
`;

export default Backdrop;
