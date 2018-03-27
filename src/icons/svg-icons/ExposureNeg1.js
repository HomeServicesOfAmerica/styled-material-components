import React from 'react';
import { Icon } from '../icons';

const ExposureNeg1Path = () => [
  <path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" key='path0' />,
];

const ExposureNeg1Icon = Icon.extend.attrs({
  children: ExposureNeg1Path,
})``;

export default ExposureNeg1Path;
export { ExposureNeg1Icon };
