import React from 'react';
import { Icon } from '../icons';

const LaptopChromebookPath = () => [
  <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" key='path0' />,
];

const LaptopChromebookIcon = Icon.extend.attrs({
  children: LaptopChromebookPath,
})``;

export default LaptopChromebookPath;
export { LaptopChromebookIcon };
