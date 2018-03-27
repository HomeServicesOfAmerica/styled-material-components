import React from 'react';
import { Icon } from '../icons';

const ReportProblemPath = () => [
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" key='path0' />,
];

const ReportProblemIcon = Icon.extend.attrs({
  children: ReportProblemPath,
})``;

export default ReportProblemPath;
export { ReportProblemIcon };
