import React from 'react'
import '../App.css'

const Square = ({handleBoardClick, id, board}) => {
  return (
    // you dont want to add a call to your handler into the event function, because it will be called any time the 
    //component renders, causing an infinite loop. So if you need to pass arguments to your handler you need to wrap
    //it in an additional callback. The callback will only be run by js on the event action.
     <button onClick={() => handleBoardClick(id)} className="square">{board}</button>
  )
}

export default Square