import styled from 'styled-components';
import typography from '../../mixins/typography';

const BodyComponent = props => (
  <section className={`${props.className} smc-body`}>{props.children}</section>
);

const Body = styled(BodyComponent)`
  margin-top: 20px;
  padding: 0 24px 24px;
  color: ${props => props.theme.textColors.secondary};
  ${typography('body1')}

  ${props => props.scrollable && css`
    max-height: 195px;
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    overflow-x: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  `}
`;

export default Body;
