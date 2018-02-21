import React, { PureComponent } from 'react';
import styled from 'styled-components';
import typography from '../mixins/typography';
import elevation from '../mixins/elevation';

// placeholder for implementing NavIconPlaceholder img
const NavIconPlaceholder = styled.div`
  height: 24px;
  width: 24px;
  margin: 12px;
`;

const TitleComponent = ({ className, children }) => (
  <h1 className={`${className} smc-appbar-title`}>
    {children}
  </h1>
);

const Title = styled(TitleComponent)`
  margin: 0 12px;
   ${typography('title')}
`;

class AppbarComponent extends PureComponent {
  render() {
    return (
      <div
        className={`${this.props.className} smc-appbar-container`}
      >
        {this.props.navIcon ? <this.props.navIcon /> : <NavIconPlaceholder />}
        <Title>{`${this.props.title}`}</Title>
      </div>
    );
  }
}

const Appbar = styled(AppbarComponent)`
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: ${props => props.theme.primary};
  ${elevation(2)}
  height: 64px;
  position: sticky;
  color: #fff;
`;

export default Appbar;
