import React from 'react';
import { Icon } from '../icons';

const SentimentDissatisfiedPath = () => [
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z" key='path0' />,
];

const SentimentDissatisfiedIcon = Icon.extend.attrs({
  children: SentimentDissatisfiedPath,
})``;

export default SentimentDissatisfiedPath;
export { SentimentDissatisfiedIcon };
