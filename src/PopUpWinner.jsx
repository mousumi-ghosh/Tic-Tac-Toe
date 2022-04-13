import React from 'react'
import "./App.css"

const PopUpWinner = (props) => {
  return ( 
        <h1 className='popUp'>winner is "{props.name}"</h1> 
  )
}

export default PopUpWinner