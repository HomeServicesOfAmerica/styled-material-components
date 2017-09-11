import styled from 'styled-components';
import typography from '../../mixins/typography';

const SubtitleComponent = props => (
  <h2 className={`${props.className} card-subtitle`}>{props.children}</h2>
);

const Subtitle = styled(SubtitleComponent)`
  ${typography('body1')}
  margin: -.063rem 0;
  color: ${props => props.theme.textColors.primary};
`;

export default Subtitle;
