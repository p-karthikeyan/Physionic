import React from 'react'
import Nav from './nav'
import bg from '../assets/bg.webp'
import Dashdesc from './dashdesc'
import Appointment from './appointment'

const Dash = () => {
  return (
    <div style={{height:'100vh',overflow:'hidden',width:'100%',margin:'0px'}}>
      <img style={{width:'100%',filter:'brightness(50%)',margin:'0px'}} src={bg}/>
      <Nav/>
      <div>
        <Dashdesc/>
        <Appointment/>
      </div>
    </div>
  )
}

export default Dash
