import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const VolumeMutePath = () => [
  <path d="M7 9v6h4l5 5V4l-5 5H7z" key='path0' />,
];

const VolumeMuteIcon = styled(Icon).attrs({
  children: VolumeMutePath,
})``;

export default VolumeMutePath;
export { VolumeMuteIcon };
