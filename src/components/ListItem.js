import React from 'react'

function ListItem(props) {
  return (
    <span onClick={(e)=> props.gameRound(e)}>{props.name}</span>
  )
}

export default ListItem