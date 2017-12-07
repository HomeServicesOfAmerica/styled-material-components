import React from 'react';
import styled from 'styled-components';

const AvatarComponent = props => (
  <div className={`${props.className} smc-avatar`}>{props.children}</div>
);

const Avatar = styled(AvatarComponent)`
  position: absolute;
  background: #bdbdbd;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
`;

export default Avatar;
