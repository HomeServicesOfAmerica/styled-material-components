import React from 'react';
import { Icon } from '../icons';

const StarPath = () => [
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" key='path0' />,
];

const StarIcon = Icon.extend.attrs({
  children: StarPath,
})``;

export default StarPath;
export { StarIcon };
