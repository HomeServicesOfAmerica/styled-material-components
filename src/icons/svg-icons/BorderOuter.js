import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const BorderOuterPath = () => [
  <path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" key='path0' />,
];

const BorderOuterIcon = styled(Icon).attrs({
  children: BorderOuterPath,
})``;

export default BorderOuterPath;
export { BorderOuterIcon };
