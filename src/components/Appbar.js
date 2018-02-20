import React, { PureComponent } from 'react';
import styled from 'styled-components';
import typography from '../mixins/typography';
import elevation from '../mixins/elevation';

// placeholder for implementing navicon img
const NavIcon = styled.div`
  height: 24px;
  width: 24px;
  margin: 12px;
`;

const TitleComponent = ({ className, children, drawer }) => (
  <h1 className={`${className} smc-appbar-title`}>
    {children}
  </h1>
);

const Title = styled(TitleComponent)`
  margin: 0 12px;
  ${typography('title')}
  ${({ drawer }) => drawer !== undefined && `
    font-size: 17px;
    position: absolute;
    right: 3px;
  `}
`;

class AppbarComponent extends PureComponent {
  render() {
    return (
      <div
        className={`${this.props.className} smc-appbar-container`}
      >
        <NavIcon />
        <Title drawer={this.props.drawer} >{`${this.props.title}`}</Title>
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
  ${({ drawer }) => drawer && `
    align-items: flex-end;
    padding: 12px;
    height: 155px;
  `};
`;

export default Appbar;
