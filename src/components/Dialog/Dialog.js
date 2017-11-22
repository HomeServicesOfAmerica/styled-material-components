import styled from 'styled-components';

const DialogComponent = props => (
  <div className={`${props.className} smc-dialog`}>{props.children}</div>
);

const Dialog = styled(DialogComponent)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 5;
`;

export default Dialog;
