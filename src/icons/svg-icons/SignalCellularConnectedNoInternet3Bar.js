import React from 'react';
import { Icon } from '../icons';

const SignalCellularConnectedNoInternet3BarPath = () => [
  <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" key='path0' />,
  <path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z" key='path1' />,
];

const SignalCellularConnectedNoInternet3BarIcon = Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet3BarPath,
})``;

export default SignalCellularConnectedNoInternet3BarPath;
export { SignalCellularConnectedNoInternet3BarIcon };
