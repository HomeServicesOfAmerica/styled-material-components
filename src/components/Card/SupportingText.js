import React from 'react';
import styled from 'styled-components';
import typography from '../../mixins/typography';

const SupportingTextComponent = props => (
  <section className={`${props.className} card-supporting-text`}>{props.children}</section>
);

const SupportingText = styled(SupportingTextComponent)`
  ${typography('body1')}
  padding: 8px 16px;
  box-sizing: border-box;
  color: ${props => props.theme.textColors.primary};

  &:last-child {
    padding-bottom: 24px;
  }

  .primary + & {
    margin-top: -8px;
    padding-top: 0;

    &:last-child {
      padding-bottom: 24px;
    }
  }
`;

export default SupportingText;
