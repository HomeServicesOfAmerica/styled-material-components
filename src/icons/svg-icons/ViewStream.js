import React from 'react';
import { Icon } from '../icons';

const ViewStreamPath = () => [
  <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" key='path0' />,
];

const ViewStreamIcon = Icon.extend.attrs({
  children: ViewStreamPath,
})``;

export default ViewStreamPath;
export { ViewStreamIcon };
