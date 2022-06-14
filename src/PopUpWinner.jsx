import React from 'react'
import "./App.css"

const PopUpWinner = (props) => {
  return ( 
        <h2 className='popUp'>Congratulations !<span class="wave">🏆</span><br/> "{props.name}" won the game.</h2> 
  )
}

export default PopUpWinner