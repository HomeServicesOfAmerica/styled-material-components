import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const PublishPath = () => [
  <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" key='path0' />,
];

const PublishIcon = styled(Icon).attrs({
  children: PublishPath,
})``;

export default PublishPath;
export { PublishIcon };
