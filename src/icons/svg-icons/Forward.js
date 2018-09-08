import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ForwardPath = () => [
  <path d="M12 8V4l8 8-8 8v-4H4V8z" key='path0' />,
];

const ForwardIcon = styled(Icon).attrs({
  children: ForwardPath,
})``;

export default ForwardPath;
export { ForwardIcon };
