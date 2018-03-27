import React from 'react';
import { Icon } from '../icons';

const FormatQuotePath = () => [
  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" key='path0' />,
];

const FormatQuoteIcon = Icon.extend.attrs({
  children: FormatQuotePath,
})``;

export default FormatQuotePath;
export { FormatQuoteIcon };
