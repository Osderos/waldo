import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px;
`;

const StyledHomeContainer= styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  margin: 25px;
 
`;

const HomeMainContainer = styled(StyledContainer)`
flex-direction: row;

`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
  box-shadow: 5px 10px 18px #888888;

  img {
    box-shadow: none;
    width: 30px;
    height: 30px;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: 5px 10px 18px #888888;
`;

export {StyledContainer, ItemsContainer, StyledImage, HomeMainContainer, StyledHomeContainer}