import React from 'react';
import { Icon } from '../icons';

const CompareArrowsPath = () => [
  <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" key='path0' />,
];

const CompareArrowsIcon = Icon.extend.attrs({
  children: CompareArrowsPath,
})``;

export default CompareArrowsPath;
export { CompareArrowsIcon };
