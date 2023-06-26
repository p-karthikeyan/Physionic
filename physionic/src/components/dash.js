import React from 'react'
import Nav from './nav'
import bg from '../assets/bg.webp'
import Dashdesc from './dashdesc'
import Appointment from './appointment'

const Dash = () => {
  return (
    <div className='dash' >
      <img className='dashbg' src={bg}/>
      <Nav/>
      <div className='dash-div'>
        <Dashdesc/>
        <Appointment/>
      </div>
    </div>
  )
}

export default Dash
