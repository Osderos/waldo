import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLogo } from "../utils/getImages";
import {
  StyledImage,
  HomeMainContainer,
  StyledHomeContainer,
} from "../components/Containers/Containers";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadLogo = async () => {
      setLogo(await getLogo());
    };
    loadLogo();
  }, []);

  const toGame = () => navigate("/game");
  const toScoreboard = () => navigate("/scoreboard");

  return (
    <StyledHomeContainer>
      <StyledHeader>
        <StyledButton>
          <img src={logo} alt="logo" />
        </StyledButton>
        <StyledButton onClick={toScoreboard}>
          <i className="fa-solid fa-star"></i> Scoreboard
        </StyledButton>
      </StyledHeader>
      <HomeMainContainer>
        <Preview onClick={toGame}>
          <StyledImage src={props.mainImage} alt="preview" />
        </Preview>
      </HomeMainContainer>
    </StyledHomeContainer>
  );
}

export default Home;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #023047;
  border-radius: 25px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
`;

const StyledButton = styled.div`
  color: white;
  font-family: "Trebuchet MS", sans-serif;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.5s ease-in;

  &:hover {
    color: gold;
    box-shadow: 5px 5px 5px 1px #888888;
    cursor: pointer;
  }
`;

const Preview = styled.div`
  width: 200px;
  height: 200px;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
