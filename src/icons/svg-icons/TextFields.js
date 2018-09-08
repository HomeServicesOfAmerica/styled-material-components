import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const TextFieldsPath = () => [
  <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" key='path0' />,
];

const TextFieldsIcon = styled(Icon).attrs({
  children: TextFieldsPath,
})``;

export default TextFieldsPath;
export { TextFieldsIcon };
