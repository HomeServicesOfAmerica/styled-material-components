import React from 'react';
import { Icon } from '../icons';

const CardMembershipPath = () => [
  <path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" key='path0' />,
];

const CardMembershipIcon = Icon.extend.attrs({
  children: CardMembershipPath,
})``;

export default CardMembershipPath;
export { CardMembershipIcon };
