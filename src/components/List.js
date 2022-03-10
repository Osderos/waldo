import React,{useState} from 'react'
import ListItem from "./ListItem";
import styled from 'styled-components'

export default function List(props) {


const itemsList = props.items.map((item) => (
    <ListItem key={item.id} name={item.name} gameRound={props.gameRound} id={item.id} />
  ));

  return (
    <ListContainer pozX={props.x} pozY={props.y} hidden={props.isHidden}>
    {itemsList}
  </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  background-color: rgba(76, 76, 76, 0.31);
  padding: 8px;
  align-items: center;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  top: ${(props) => props.pozY + "px"};
  left: ${(props) => props.pozX + "px"};

  span {
    @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
    font-family: "Lato", sans-serif;
    border-bottom: 1px solid gray;
    color: white;
    font-weight: bolder;
  }

  &:hover {
    cursor: pointer;
  }
  `
