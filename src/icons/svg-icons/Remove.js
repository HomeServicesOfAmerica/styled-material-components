import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const RemovePath = () => [
  <path d="M19 13H5v-2h14v2z" key='path0' />,
];

const RemoveIcon = styled(Icon).attrs({
  children: RemovePath,
})``;

export default RemovePath;
export { RemoveIcon };
