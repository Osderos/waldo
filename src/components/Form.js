import React, { useState, useEffect } from "react";
import { FormContainer } from "../components/Containers/Containers";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import {addDoc, collection} from 'firebase/firestore'


function Form(props) {
  const [playerDetails, setPlayerDetails] = useState({
    name: "",
    score: 500 - props.points / 100,
  });

  const navigate = useNavigate();

  const toHome = () => navigate("/");

  const handleInput = (e) => {
    setPlayerDetails({ ...playerDetails, name: e.target.value });
  };

  const scoresRef = collection(db, 'scores')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(scoresRef, {
      name: playerDetails.name,
      score: playerDetails.score,
    }).then(()=>{toHome()})
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1>Congratualations!</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerDetails.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <h2>Your time is</h2>
          <div>
            {" "}
            <span>
              {("0" + Math.floor((props.points / 60000) % 60)).slice(-2)}:
            </span>
            <span>
              {("0" + Math.floor((props.points / 1000) % 60)).slice(-2)}:
            </span>
            <span>{("0" + ((props.points / 10) % 100)).slice(-2)}</span>
          </div>
        </div>
        <div>
          <SubmitButton type="submit">Add Score</SubmitButton>
          <ReturnButton onClick={toHome}>Return Home</ReturnButton>
        </div>
      </FormContainer>
    </form>
  );
}

export default Form;

const SubmitButton = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
`;

const ReturnButton = styled(SubmitButton)`
  color: crimson;
  border-color: crimson;
`;
