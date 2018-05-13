import React from "react";
import styled from "styled-components";

const ListComponent = ({ className, children }) => (
  <ul className={`${className} smc-list`}>{children}</ul>
);

const List = styled(ListComponent)`
  position: relative;
  margin: 8px 0;
  padding: 0;
  list-style: none;
`;

export default List;
