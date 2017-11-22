import styled from 'styled-components';
import typography from '../../mixins/typography';

const HeaderComponent = props => (
  <header className={`${props.className} smc-header`}>
    <h2 className="smc-title">{props.children}</h2>
  </header>
);

const Header = styled(HeaderComponent)`
  display: flex;
  align-items: center;
  padding: 24px 24px 0;
  & .smc-title {
    ${typography('title')}
    flex: 1;
    margin: 0;
  }
`;

export default Header;
