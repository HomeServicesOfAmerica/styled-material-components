import React from 'react';
import { Icon } from '../icons';

const SignalCellularConnectedNoInternet1BarPath = () => [
  <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" key='path0' />,
  <path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" key='path1' />,
];

const SignalCellularConnectedNoInternet1BarIcon = Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet1BarPath,
})``;

export default SignalCellularConnectedNoInternet1BarPath;
export { SignalCellularConnectedNoInternet1BarIcon };
