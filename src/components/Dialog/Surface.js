import styled from 'styled-components';
import elevation from '../../mixins/elevation';

const SurfaceComponent = props => (
  <div className={`${props.className} smc-surface`}>{props.children}</div>
);

const Surface = styled(SurfaceComponent)`
  display: inline-flex;
   flex-direction: column;
   width: calc(100% - 30px);
   min-width: 640px;
   max-width: 865px;
   transform: translateY(150px) scale(.8);
   border-radius: 2px;
   opacity: 0;
   background-color: ${props => props.theme.backgroundColor};
   ${elevation(24)};
`;

export default Surface;
