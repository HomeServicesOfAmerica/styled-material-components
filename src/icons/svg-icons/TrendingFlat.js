import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const TrendingFlatPath = () => [
  <path d="M22 12l-4-4v3H3v2h15v3z" key='path0' />,
];

const TrendingFlatIcon = styled(Icon).attrs({
  children: TrendingFlatPath,
})``;

export default TrendingFlatPath;
export { TrendingFlatIcon };
