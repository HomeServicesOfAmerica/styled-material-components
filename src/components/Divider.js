import React from 'react';
import styled from 'styled-components';

const DividerComponent = ({ className }) => <hr className={`${className} smc-divider`} />;

const determineLeftMargin = ({ inset }) => {
  if (!inset) return '0px';
  return typeof inset === 'string' ? inset : '16px';
};
const Divider = styled(DividerComponent)`
  border: none;
  background-color: rgba(0, 0, 0, .12);
  height: 1px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: ${determineLeftMargin};
`;

export default Divider;
