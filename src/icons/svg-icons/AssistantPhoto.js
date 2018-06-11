import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const AssistantPhotoPath = () => [
  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" key='path0' />,
];

const AssistantPhotoIcon = styled(Icon).attrs({
  children: AssistantPhotoPath,
});

export default AssistantPhotoPath;
export { AssistantPhotoIcon };
