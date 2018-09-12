import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ViewArrayPath = () => [
  <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" key='path0' />,
];

const ViewArrayIcon = styled(Icon).attrs({
  children: ViewArrayPath,
})``;

export default ViewArrayPath;
export { ViewArrayIcon };
