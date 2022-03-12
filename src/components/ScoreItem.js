import React from "react";
import styled from 'styled-components'
import { ItemsContainer } from "./Containers/Containers";

function ScoreItem(props) {
  return (
    <ItemsContainer>
      <StyledSpan>Name:{props.name}</StyledSpan>
      <StyledSpan>Score:{props.score}</StyledSpan>
    </ItemsContainer>
  );
}

export default ScoreItem;

const StyledSpan = styled.span`
    font-size: 16px;
    font-family: monospace;
`
