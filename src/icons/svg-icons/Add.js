import React from 'react';
import { Icon } from '../icons';

const AddPath = () => [
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" key='path0' />,
];

const AddIcon = Icon.extend.attrs({
  children: AddPath,
})``;

export default AddPath;
export { AddIcon };
