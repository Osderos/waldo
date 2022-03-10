import React from "react";
import styled from "styled-components";

function ListItem(props) {
  return (
    <StyledItem
      onClick={(e) => {
        props.gameRound(e);
        props.messageTimer();
      }}
      data-tag={props.id}
    >
      {props.name}
    </StyledItem>
  );
}

export default ListItem;

const StyledItem = styled.span`
  transition: all 0.5 ease;

  &:hover {
    color: red;
  }
`;
