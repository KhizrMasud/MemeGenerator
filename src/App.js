
import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./header.js"
import Middle from "./middle.js"
import boxesData from './boxesData.js'
import Box from './Box.js'

export default function App(){

  const [boxDataState, setBoxDataState] = React.useState(boxesData);

  function toggle(eachBoxSquaresId){
    setBoxDataState((prevState) => {
      return prevState.map((square) => {
          return square.id === eachBoxSquaresId ? {...square, on: !square.on} : {...square}
      })
    })

    console.log(boxDataState)
  }







  const eachBox = boxDataState.map( individualBox => (
    <Box 
    keyProp={individualBox.id}
    idProp={individualBox.id}
    onProp={individualBox.on}
    toggle={() => toggle(individualBox.id)}
    />
  ))

  
  return (
  <div>
    <Header />
    <Middle className='middle--app'/>
    <div className='box-container'>
    {eachBox}
    </div>
    
  </div>
  
  )}