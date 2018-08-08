import React from 'react';
import { Icon } from '../icons';

const TrendingFlatPath = () => [
  <path d="M22 12l-4-4v3H3v2h15v3z" key='path0' />,
];

const TrendingFlatIcon = Icon.extend.attrs({
  children: TrendingFlatPath,
})``;

export default TrendingFlatPath;
export { TrendingFlatIcon };
