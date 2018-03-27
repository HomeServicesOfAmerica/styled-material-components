import React from 'react';
import { Icon } from '../icons';

const SignalCellularConnectedNoInternet2BarPath = () => [
  <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" key='path0' />,
  <path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" key='path1' />,
];

const SignalCellularConnectedNoInternet2BarIcon = Icon.extend.attrs({
  children: SignalCellularConnectedNoInternet2BarPath,
})``;

export default SignalCellularConnectedNoInternet2BarPath;
export { SignalCellularConnectedNoInternet2BarIcon };
