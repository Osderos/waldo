import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import styled from "styled-components";
import Image from "./images/example1.png";
import ex1item1 from "./images/example1-item1.png";
import ex1item2 from "./images/example1-item2.png";
import ex1item3 from "./images/example1-item3.png";
import ListItem from "./components/ListItem";

function App() {
  const [items, setItems] = useState([]);
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "positions"), (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  const gameRound = (e) => {
    const value = e.target.innerText;
    console.log(value);
  };
  
  const itemsList = items.map((item) => (
    <ListItem key={item.id} name={item.name} gameRound={gameRound} />
  ));

  return (
    <StyledContainer>
      <Cursor id="corsor" />
      <ListContainer pozX={positionX} pozY={positionY} hidden={isHidden}>
        {itemsList}
      </ListContainer>
      <ItemsContainer>
        <StyledImage src={ex1item1} alt="ex1item1" />
        <StyledImage src={ex1item2} alt="ex1item2" />
        <StyledImage src={ex1item3} alt="ex1item3" />
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
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border: 3px dashed red;
  border-radius: 50%;
  pointer-events: none;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: fixed;
  background-color: rgba(76, 76, 76, 0.31);
  padding: 8px;
  align-items: center;
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
