import React from 'react';
import styled from 'styled-components';
import typography from '../../mixins/typography';

const ListSubheaderComponent = ({ className, children }) => (
  <li className={`${className} smc-list-subheader`}>{children}</li>
);

const ListSubheader = styled(ListSubheaderComponent)`
  align-items: center;
  color: ${props => (props.primary ? props.theme.primary : props.theme.textColors.secondary)};
  display: flex;
  min-height: 48px;
  position: relative;
  padding-left: 16px;
  ${typography('body1')};
`;

export default ListSubheader;
