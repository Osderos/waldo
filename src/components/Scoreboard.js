import React, { useState, useEffect } from "react";
import {
  ItemsContainer,
  StyledContainer,
} from "../components/Containers/Containers";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { StyledButton } from "../components/Buttons/Buttons";
import ScoreItem from "./ScoreItem";
import { useNavigate } from "react-router-dom";

function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const populateScoresfromDB = onSnapshot(
      collection(db, "scores"),
      (snapshot) => {
        setScores(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );

    return populateScoresfromDB;
  }, []);

  const navigate = useNavigate();

  const toHome = () => navigate("/");

  const scoresList = scores.map((score) => (
    <ScoreItem key={score.id} name={score.name} score={score.score} />
  ));

  return (
    <StyledContainer style={{ left: "50%" }}>
      <ItemsContainer>
        <h1 style={{ margin: "0px", fontFamily: "monospace" }}>HIGH SCORES</h1>
        <StyledButton onClick={toHome}>Back</StyledButton>
      </ItemsContainer>
      {scoresList}
    </StyledContainer>
  );
}

export default Scoreboard;
