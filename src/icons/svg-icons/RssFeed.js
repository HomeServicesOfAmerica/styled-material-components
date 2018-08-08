import React from 'react';
import { Icon } from '../icons';

const RssFeedPath = () => [
  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" key='path0' />,
];

const RssFeedIcon = Icon.extend.attrs({
  children: RssFeedPath,
})``;

export default RssFeedPath;
export { RssFeedIcon };
