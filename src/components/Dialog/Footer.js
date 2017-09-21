import styled from 'styled-components';

const FooterComponent = props => (
  <footer className={`${props.className} smc-footer`}>{prpos.children}</footer>
);

const Footer = styled(FooterComponent)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;
