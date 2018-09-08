import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ReportProblemPath = () => [
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" key='path0' />,
];

const ReportProblemIcon = styled(Icon).attrs({
  children: ReportProblemPath,
})``;

export default ReportProblemPath;
export { ReportProblemIcon };
