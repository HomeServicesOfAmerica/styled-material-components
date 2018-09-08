import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SubjectPath = () => [
  <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" key='path0' />,
];

const SubjectIcon = styled(Icon).attrs({
  children: SubjectPath,
})``;

export default SubjectPath;
export { SubjectIcon };
