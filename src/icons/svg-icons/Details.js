import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const DetailsPath = () => [
  <path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" key='path0' />,
];

const DetailsIcon = styled(Icon).attrs({
  children: DetailsPath,
})``;

export default DetailsPath;
export { DetailsIcon };
