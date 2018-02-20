import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from '../Avatar';
import typography from '../../mixins/typography';

const Title = styled.h1`
  ${typography('body2')}
  margin: -.063rem 0;

  ${props => props.large && css`
    ${typography('headline')}
    margin: 0;
  `}

  .primary & {
    ${props => props.large && css `
      padding-top: 8px;
    `}
  }
`;

const Subheader = styled.h2`
  ${typography('body1')}
  margin: -.063rem 0;
  color: ${props => props.theme.textColors.primary};
`;

const PrimaryComponent = ({ avatar, title, subheader, className, large }) => (
  <section className={`${className} card-primary`}>
    {avatar && (
      <Avatar src={avatar} />
    )}

    <div className="smc-card-title-container">
      {title && (
        <Title className={`card-title`} large={large}>{title}</Title>
      )}
      {subheader && (
        <Subheader className={`card-subtitle`}>{subheader}</Subheader>
      )}
    </div>

  </section>
);

const Primary = styled(PrimaryComponent)`
  padding: 16px;

  ${Avatar} {
    position: absolute;
  }

  > .smc-card-title-container {
    margin-left: ${props => (props.avatar ? '56px' : '0px')}
  }

  &:last-child {
    padding-bottom: 24px;
  }
`;

export default Primary;
