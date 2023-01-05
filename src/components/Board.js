import React from 'react'
import Square from './Square'

const Board = ({board, handleBoard}) => {

  return (
    <div className="board">{board.map((square, id) => <Square board={square} handleBoardClick={handleBoard} id={id} key={id.toString()}/>)}</div>
  )
}

export default Board