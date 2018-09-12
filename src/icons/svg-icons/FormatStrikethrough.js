import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const FormatStrikethroughPath = () => [
  <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" key='path0' />,
];

const FormatStrikethroughIcon = styled(Icon).attrs({
  children: FormatStrikethroughPath,
})``;

export default FormatStrikethroughPath;
export { FormatStrikethroughIcon };
