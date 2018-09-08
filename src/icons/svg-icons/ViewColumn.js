import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ViewColumnPath = () => [
  <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" key='path0' />,
];

const ViewColumnIcon = styled(Icon).attrs({
  children: ViewColumnPath,
})``;

export default ViewColumnPath;
export { ViewColumnIcon };
