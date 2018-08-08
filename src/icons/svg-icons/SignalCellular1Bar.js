import React from 'react';
import { Icon } from '../icons';

const SignalCellular1BarPath = () => [
  <path fillOpacity=".3" d="M2 22h20V2z" key='path0' />,
  <path d="M12 12L2 22h10z" key='path1' />,
];

const SignalCellular1BarIcon = Icon.extend.attrs({
  children: SignalCellular1BarPath,
})``;

export default SignalCellular1BarPath;
export { SignalCellular1BarIcon };
