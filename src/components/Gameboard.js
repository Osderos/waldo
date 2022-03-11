import React, { useState } from "react";
import db from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import styled from "styled-components";
import List from "./List";
import { checkPointInCircle } from "../utils/checkPointInCircle";
import { CorrectTemplate, WrongTemplate } from "../utils/messageTemplates";
import {
  StyledContainer,
  ItemsContainer,
  StyledImage,
} from "../components/Containers/Containers";

function Gameboard(props) {
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [isCorrect, setIsCorrect] = useState("");

  const toggleList = (e) => {
    setX(e.pageX);
    setY(e.pageY);
    setHidden(!isHidden);
  };

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

  const gameRound = async (e) => {
    const positionRef = doc(db, "positions", `${e.target.dataset.tag}`);
    const document = await getDoc(positionRef);
    const pozX = document.data().positionX;
    const pozY = document.data().positionY;
    const name = document.data().name;
    const resultat = checkPointInCircle(pozX, pozY, positionX, positionY, 2.5);
    props.removeItemFromList(resultat, name);
    setIsCorrect(resultat);
  };

  const messageTimer = () => {
    setTimeout(toNull, 3000);
  };

  const toNull = () => {
    setIsCorrect(null);
  };

  const messageBox = () => {
    if (isCorrect === true) {
      return (
        <CorrectTemplate pozX={props.x} pozY={props.y}>
          Congratualations, you have found the item!
        </CorrectTemplate>
      );
    } else if (isCorrect === false) {
      return (
        <WrongTemplate pozX={x} pozY={y}>
          Sorry, that's not it!
        </WrongTemplate>
      );
    } else {
      return null;
    }
  };

  const imagesList = props.images.map((imge) => (
    <StyledImage src={imge.url} key={imge.id} />
  ));

  return (
    <StyledContainer>
      <ItemsContainer>{imagesList}</ItemsContainer>
      {messageBox()}
      <List
        items={props.items}
        x={x}
        y={y}
        isHidden={isHidden}
        gameRound={gameRound}
        messageTimer={messageTimer}
      />
      <div
        onClick={(e) => {
          printCoordinates(e);
          toggleList(e);
        }}
        onMouseMove={cursorAnim}
      >
        <Cursor id="corsor" />
        <StyledImage src={props.mainImage} alt="ex1" />
      </div>
    </StyledContainer>
  );
}

export default Gameboard;

const Cursor = styled.div`
  position: fixed;
  width: 58px;
  height: 58px;
  margin: -29px 0 0 -29px;
  border: 3px dashed red;
  border-radius: 50%;
  pointer-events: none;
`;
