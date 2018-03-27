import React from 'react';
import { Icon } from '../icons';

const SimCardAlertPath = () => [
  <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z" key='path0' />,
];

const SimCardAlertIcon = Icon.extend.attrs({
  children: SimCardAlertPath,
})``;

export default SimCardAlertPath;
export { SimCardAlertIcon };
