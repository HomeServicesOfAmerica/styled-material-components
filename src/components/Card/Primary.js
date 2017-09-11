import styled from 'styled-components';

const PrimaryComponent = props => (
  <section className={`${props.className} card-primary`}>{props.children}</section>
);

const Primary = styled(PrimaryComponent)`
  padding: 16px;

  &:last-child {
    padding-bottom: 24px;
  }
`;

export default Primary;
