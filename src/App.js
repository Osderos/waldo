import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import styled from "styled-components";
import Image from "./images/example1.png";
import ex1item1 from "./images/example1-item1.png";
import ex1item2 from "./images/example1-item2.png";
import ex1item3 from "./images/example1-item3.png";

function App() {
  const [chars, setChars] = useState([]);
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "chars"), (snapshot) => {
      setChars(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const handlePosition = (e) => {
    setPositionX(e.clientX + "px");
    setPositionY(e.clientY + "px");
    setHidden(!isHidden);
  };

  const cursor = document.querySelector("#corsor");
  const cursorAnim = (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  };

  return (
    <StyledContainer>
      <Cursor id="corsor" />
      <List pozX={positionX} pozY={positionY} hidden={isHidden}>
        <span>Tent</span>
        <span>Passport</span>
        <span>Slippers</span>
      </List>
      <ItemsContainer>
        <ImageContainer>
          <StyledMiniImage src={ex1item1} alt="ex1item1" />
        </ImageContainer>
        <ImageContainer>
          <StyledMiniImage src={ex1item2} alt="ex1item2" />
        </ImageContainer>
        <ImageContainer>
          <StyledMiniImage src={ex1item3} alt="ex1item3" />
        </ImageContainer>
      </ItemsContainer>
      <StyledImage
        src={Image}
        alt="ex1"
        onClick={handlePosition}
        onMouseMove={cursorAnim}
      />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 75%;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: 5px 10px 18px #888888;
`;

const StyledMiniImage = styled(StyledImage)`
  box-shadow: none;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 2px solid #ffe8d6;
`;

const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
`;

const Cursor = styled.div`
  position: fixed;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border: 3px dashed red;
  border-radius: 50%;
  pointer-events: none;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: rgba(76, 76, 76, 0.31);
  padding: 8px;
  align-items: center;
  position: absolute;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  top: ${(props) => props.pozY};
  left: ${(props) => props.pozX};

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
`;
