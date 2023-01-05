import React, { useState } from 'react'


//components are js functions that return markup
const MyButton = ({count, onClick}) => {
   
    const buttonText = `Clicked ${count} times`
   
      //you can only call hooks in the top level of your component, so inside the component before the return.
      

    //jsx allows you to embed js into your markup.
  return (
    //Dont call your handlers when you pass them to event attributes, they will be called by js when the event action
    //has occured. 
    <button onClick={onClick}>{buttonText}</button>
  )
}

export default MyButton