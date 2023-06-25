import React from 'react'

const Appointment = () => {

  return (
    <div className='appointment'>
      <h3 style={{margin:'30px 0px'}}>Book Appointment</h3>
      <form>
        <label htmlFor='name'>Name *</label>
        <input type='text' id='name' placeholder='Full Name *' required/>
        <label htmlFor='email'>Email address *</label>
        <input type='email' id='email' placeholder='example@gmail.com' required/>
        <label htmlFor='dept'>Department *</label>
        <input type='dropdown' id='dept' placeholder='Please Select' required/>
        <label htmlFor='time'>Time *</label>
        <input type='dropdown' placeholder='4:00 available' required/>
        <button className='prim-btn'>Book Appointment</button>
      </form>
    </div>
  )
}

export default Appointment
