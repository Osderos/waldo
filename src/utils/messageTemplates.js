import styled from 'styled-components'


export const CorrectTemplate = styled.div`
background-color:rgba(0, 204, 0, 0.37) ;
border: 2px solid rgba(0, 204, 0, 1);
color: white;
padding: 10px ;
border-radius: 15px ;
position: absolute;
width: 25% ;
top:${props=> props.pozY - 100 +'px'};
left:${props=> props.pozX - 150 +'px'};
font-weight: bold ;
text-align: center;
`


export const WrongTemplate = styled(CorrectTemplate)`
background-color:rgba(255, 0, 0, 0.4) ;
border: 2px solid rgba(255, 0, 0, 1);
`

