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

  console.log(chars);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "chars"), (snapshot) => {
      setChars(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);


  const handlePosition = (e) =>{
    console.log(e.clientX, e.clientY)
  } 

  return (
    <StyledContainer>
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
      <StyledImage src={Image} alt="ex1" onClick={handlePosition} />
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

const StyledMiniImage=styled(StyledImage)`
box-shadow: none;
`

const ItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  border:2px solid #ffe8d6;
`;

const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
`;

const Cursor = styled.div`
position: fixed;
border-radius: 50%;
transform: translateX(-50%) translateY(-50%)
`
