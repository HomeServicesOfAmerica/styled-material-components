import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const FlashOnPath = () => [
  <path d="M7 2v11h3v9l7-12h-4l4-8z" key='path0' />,
];

const FlashOnIcon = styled(Icon).attrs({
  children: FlashOnPath,
});

export default FlashOnPath;
export { FlashOnIcon };
