import React from 'react';
import { Icon } from '../icons';

const ViewQuiltPath = () => [
  <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" key='path0' />,
];

const ViewQuiltIcon = Icon.extend.attrs({
  children: ViewQuiltPath,
})``;

export default ViewQuiltPath;
export { ViewQuiltIcon };
