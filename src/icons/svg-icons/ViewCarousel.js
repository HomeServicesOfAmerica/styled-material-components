import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ViewCarouselPath = () => [
  <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" key='path0' />,
];

const ViewCarouselIcon = styled(Icon).attrs({
  children: ViewCarouselPath,
})``;

export default ViewCarouselPath;
export { ViewCarouselIcon };
