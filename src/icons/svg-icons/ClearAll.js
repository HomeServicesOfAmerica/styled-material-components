import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ClearAllPath = () => [
  <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" key='path0' />,
];

const ClearAllIcon = styled(Icon).attrs({
  children: ClearAllPath,
})``;

export default ClearAllPath;
export { ClearAllIcon };
