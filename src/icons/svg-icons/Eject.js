import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const EjectPath = () => [
  <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" key='path0' />,
];

const EjectIcon = styled(Icon).attrs({
  children: EjectPath,
})``;

export default EjectPath;
export { EjectIcon };
