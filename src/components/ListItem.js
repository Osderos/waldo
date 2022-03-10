import React from 'react'

function ListItem(props) {

  
  return (
    <span onClick={(e)=>props.gameRound(e)} data-tag={props.id}>{props.name}</span>
  )
}

export default ListItem