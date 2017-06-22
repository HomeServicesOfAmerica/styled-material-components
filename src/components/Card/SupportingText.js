import styled from 'styled-components';
import typography from '../../mixins/typography';

const SupportingText = styled.section`
  ${typography('body1')}
  padding: 8px 16px;
  box-sizing: border-box;
  color: ${props => props.theme.textColors.primary};

  &:last-child {
    padding-bottom: 24px;
  }
`;

export default SupportingText;
