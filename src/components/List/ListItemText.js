import React from "react";
import styled from "styled-components";

const ListItemTextComponent = ({ className, primary, secondary }) => (
  <div className={`${className} smc-list-text-container`}>
    {primary && <h3 className="smc-list-text-primary">{primary}</h3>}
    {secondary && <p className="smc-list-text-secondary">{secondary}</p>}
  </div>
);

const ListItemText = styled(ListItemTextComponent)`
  > .smc-list-text-primary {
    margin: 0px;
  }

  > .smc-list-text-secondary {
    margin-top: 2px;
    margin-bottom: 0px;
    p {
      margin: 0;
    }
  }
`;

export default ListItemText;
