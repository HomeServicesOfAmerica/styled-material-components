import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const CropFreePath = () => [
  <path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z" key='path0' />,
];

const CropFreeIcon = styled(Icon).attrs({
  children: CropFreePath,
});

export default CropFreePath;
export { CropFreeIcon };
