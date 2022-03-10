import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../images/example1.png";
import ex1item1 from "../images/example1-item1.png";
import ex1item2 from "../images/example1-item2.png";
import ex1item3 from "../images/example1-item3.png";
import List from "./List";

function Gameboard(props) {
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [isHidden, setHidden] = useState(true);

  const toggleList = (e) => {
    setX(e.pageX);
    setY(e.pageY);
    setHidden(!isHidden);
  };

  useEffect(() => {
    console.log("Coord X", positionX);
    console.log("Coord Y", positionY);
    console.log('List X', x);
    console.log('List Y', y);
  });

  const printCoordinates = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    setPositionX(Math.round((offsetX / width) * 100));
    setPositionY(Math.round((offsetY / height) * 100));
  };

  const cursor = document.querySelector("#corsor");
  const cursorAnim = (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  };

  const checkPointInCircle = (e) => {
    console.log(e.pageX, e.pageY);
  };

  return (
    <StyledContainer>
      <ItemsContainer>
        <StyledImage src={ex1item1} alt="ex1item1" />
        <StyledImage src={ex1item2} alt="ex1item2" />
        <StyledImage src={ex1item3} alt="ex1item3" />
      </ItemsContainer>
      <div
        onClick={(e) => {
          printCoordinates(e);
          toggleList(e);
        }}
        onMouseMove={cursorAnim}
      >
        <List items={props.items} x={x} y={y} isHidden={isHidden}/>
        <Cursor id="corsor" />
        <StyledImage src={Image} alt="ex1" />
      </div>
    </StyledContainer>
  );
}

export default Gameboard;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: 5px 10px 18px #888888;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 2px solid #ffe8d6;

  img {
    box-shadow: none;
    width: 30px;
    height: 30px;
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 32px;
  height: 32px;
  margin: -16px 0 0 -16px;
  border: 3px dashed red;
  border-radius: 50%;
  pointer-events: none;
`;
