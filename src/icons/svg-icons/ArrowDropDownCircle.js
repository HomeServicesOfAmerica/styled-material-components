import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const ArrowDropDownCirclePath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" key='path0' />,
];

const ArrowDropDownCircleIcon = styled(Icon).attrs({
  children: ArrowDropDownCirclePath,
});

export default ArrowDropDownCirclePath;
export { ArrowDropDownCircleIcon };
