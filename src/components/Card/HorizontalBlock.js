import styled from 'styled-components';

const HorizontalBlockComponent = props => (
  <div className={`${props.className} card-horizontal-block`}>{props.children}</div>
);

const HorizontalBlock = styled(HorizontalBlockComponent)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0;
  padding-left: 0;
  padding-right: 16px;
  & .card-media-item {
    margin-left: 16px;
    margin-right: 0;
  }
  & .card-actions {
    margin: 16px;
  }
`;

export default HorizontalBlock;
