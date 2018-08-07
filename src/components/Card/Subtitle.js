// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import typography from '../../mixins/typography';

type CardSubtitlePropsType = {|
  children: Node,
  className: string,
|};

const SubtitleComponent = (props: CardSubtitlePropsType) => (
  <h2 className={`${props.className} card-subtitle`}>{props.children}</h2>
);

const Subtitle = styled(SubtitleComponent)`
  ${typography('body1')} margin: -.063rem 0;
  color: ${props => props.theme.textColors.primary};
`;

export default Subtitle;
