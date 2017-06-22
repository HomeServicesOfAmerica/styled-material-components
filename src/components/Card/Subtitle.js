import styled from 'styled-components';
import typography from '../../mixins/typography';

const Subtitle = styled.h2`
  ${typography('body1')}
  margin: -.063rem 0;
  color: ${props => props.theme.textColors.primary};
`;

export default Subtitle;
