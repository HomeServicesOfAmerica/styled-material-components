import React from 'react';
import styled, { css } from 'styled-components';
import { Column } from '../FlexGrid';
import { rowMixin } from '../../mixins/flex';
import typography from '../../mixins/typography';
import elevation from '../../mixins/elevation';

export const AppbarIcon = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
`;

const AppbarTitleComponent = ({ children, column, className, Icon, onIconClick }) => (
  <Column {...column}>
    <h1 className={className}>
      {Icon && <Icon onClick={onIconClick} />}
      {children}
    </h1>
  </Column>
);

AppbarTitleComponent.defaultProps = {
  column: { size: 12 },
};

export const AppbarTitle = styled(AppbarTitleComponent)`
  display: flex;
  align-items: center;
  flex: 1;
  ${typography('title')}
`;

const AppbarRedux = ({ className, children }) => (
  <header className={className} data-smc="Appbar">
    {children}
  </header>
);

// const AppbarComponent = ({ className, title, navIcon, children, dense, double = false }) => (
//   <header className={className} data-smc="Appbar">
//     <Column size={12} noGutters>
//       <Row stretch>
//         <Column noGutters size={children ? 3 : 12}>
//           {navIcon && <AppbarIcon><navIcon /></AppbarIcon>}
//           <AppbarTitle double={double} dense={dense}>{title}</AppbarTitle>
//         </Column>
//         {children && !double && (
//           <Column size={9} noGutters>
//             <Row horizontal="right" vertical="middle" relative>
//               {children}
//             </Row>
//           </Column>
//         )}
//       </Row>
//       {children && double && (
//         <Row horizontal="left" vertical="middle" relative>
//           {children}
//         </Row>
//       )}
//     </Column>
//   </header>
// );

const sizeByScale = (dense, double) => {
  let height = dense ? 48 : 64;
  if (double) height *= 2;
  return css`
    height: ${height}px;
  `;
};

export const Appbar = styled(AppbarRedux)`
  ${props => rowMixin({
    horizontal: props.double ? 'left' : 'center',
    vertical: 'middle',
  })}
  max-height: 64px;
  background-color: ${props => props.theme.primary};
  ${elevation(2)}
  ${props => sizeByScale(props.dense, props.double)}
  color: #fff;
`;
