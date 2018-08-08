import React from 'react';
import { Icon } from '../icons';

const SignalWifi0BarPath = () => [
  <path fillOpacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" key='path0' />,
];

const SignalWifi0BarIcon = Icon.extend.attrs({
  children: SignalWifi0BarPath,
})``;

export default SignalWifi0BarPath;
export { SignalWifi0BarIcon };
