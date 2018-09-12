import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ShowChartPath = () => [
  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" key='path0' />,
];

const ShowChartIcon = styled(Icon).attrs({
  children: ShowChartPath,
})``;

export default ShowChartPath;
export { ShowChartIcon };
