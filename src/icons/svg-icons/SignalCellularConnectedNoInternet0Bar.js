import React from 'react';
import { Icon } from '../icons';

const SignalCellularConnectedNoInternet0BarPath = () => [
  <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" key='path0' />,
  <path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" key='path1' />,
];

const SignalCellularConnectedNoInternet0BarIcon = Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet0BarPath,
})``;

export default SignalCellularConnectedNoInternet0BarPath;
export { SignalCellularConnectedNoInternet0BarIcon };
