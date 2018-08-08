import React from 'react';
import { Icon } from '../icons';

const FilterBAndWPath = () => [
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z" key='path0' />,
];

const FilterBAndWIcon = Icon.extend.attrs({
  children: FilterBAndWPath,
})``;

export default FilterBAndWPath;
export { FilterBAndWIcon };
