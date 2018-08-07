import React from 'react';

import { Icon } from '../icons';

const ViewAgendaPath = () => [
  <path
    d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"
    key="path0"
  />,
];

const ViewAgendaIcon = Icon.extend.attrs({
  children: ViewAgendaPath,
})``;

export default ViewAgendaPath;
export { ViewAgendaIcon };
