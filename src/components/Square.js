import React from 'react'
import '../App.css'

const Square = ({handleBoardClick, id, board}) => {
  return (
     <button onClick={() => handleBoardClick(id)} className="square">{board}</button>
  )
}

export default Square