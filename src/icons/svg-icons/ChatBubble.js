import React from 'react';
import { Icon } from '../icons';

const ChatBubblePath = () => [
  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" key='path0' />,
];

const ChatBubbleIcon = Icon.extend.attrs({
  children: ChatBubblePath,
})``;

export default ChatBubblePath;
export { ChatBubbleIcon };
