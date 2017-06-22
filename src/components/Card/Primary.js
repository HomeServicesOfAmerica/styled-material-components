import styled from 'styled-components';

const PrimarySection = props => (
  <section className={`${props.className} primary`}>{props.children}</section>
);

const Primary = styled(PrimarySection)`
  padding: 16px;

  &:last-child {
    padding-bottom: 24px;
  }
`;

export default Primary;
