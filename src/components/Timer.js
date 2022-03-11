import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../utils/UserContext";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);
  const { gameOver, setPoints } = useContext(UserContext);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  useEffect(() => {
    if (gameOver) {
      setTimerOn(false);
      setPoints(time)
    }
  }, [gameOver]);

  return (
    <StyledTimer>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </StyledTimer>
  );
}

export default Timer;

const StyledTimer = styled.div`
  background-color: #023047;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
`;
