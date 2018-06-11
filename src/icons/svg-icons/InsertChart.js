import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const InsertChartPath = () => [
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" key='path0' />,
];

const InsertChartIcon = styled(Icon).attrs({
  children: InsertChartPath,
});

export default InsertChartPath;
export { InsertChartIcon };
