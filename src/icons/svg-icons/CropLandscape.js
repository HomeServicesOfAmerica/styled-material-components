import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const CropLandscapePath = () => [
  <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" key='path0' />,
];

const CropLandscapeIcon = styled(Icon).attrs({
  children: CropLandscapePath,
})``;

export default CropLandscapePath;
export { CropLandscapeIcon };
