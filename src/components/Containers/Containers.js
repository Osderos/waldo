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

const FormContainer = styled(StyledContainer)`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hubballi&display=swap');
align-items: center;
border: 2px solid gray;
border-radius: 25px;
padding-bottom:25px;
width:50%;
position:fixed;
top: 50%;
left:25%;
background-color: rgba(119, 175, 140, 0.5);

h1,h2{
  font-family: 'Righteous', cursive;
  font-weight: bold;
}

input{
  font-family: 'Hubballi';
  font-size: 16px;
  padding:5px;
  border-radius:5px;
  text-align: center;
}
div{
  display:flex;
  gap:5px;
  align-items: center;
}
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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

export {StyledContainer, ItemsContainer, StyledImage, HomeMainContainer, StyledHomeContainer, FormContainer}