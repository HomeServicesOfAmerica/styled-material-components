import React from 'react';
import { Icon } from '../icons';

const BrandingWatermarkPath = () => [
  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z" key='path0' />,
];

const BrandingWatermarkIcon = Icon.extend.attrs({
  children: BrandingWatermarkPath,
})``;

export default BrandingWatermarkPath;
export { BrandingWatermarkIcon };
