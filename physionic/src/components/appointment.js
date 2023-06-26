import React from 'react'

const Appointment = () => {

  return (
    <div className='appointment'>
      <h3>Book Appointment</h3>
      <form>
        <label htmlFor='name'>Name *</label>
        <input type='text' id='name' placeholder='Full Name *' required/>
        <label htmlFor='email'>Email address *</label>
        <input type='email' id='email' placeholder='example@gmail.com' required/>
        <label htmlFor='dept'>Department *</label>
        <select id='dept'>
          <option>Neurology</option>
          <option>Cardialogy</option>
          <option>Ortho</option>
          <option>Homeo</option>
          <option selected disabled hidden>Please select</option>
        </select>
        <label htmlFor='time'>Time *</label>
        <select id='time'>
          <option>09:00 am</option>
          <option>10:00 am</option>
          <option>11:00 am</option>
          <option>02:00 pm</option>
          <option>03:00 pm</option>
          <option selected>04:00 pm available</option>
        </select>
        <button className='prim-btn'>Book Appointment</button>
      </form>
    </div>
  )
}

export default Appointment
