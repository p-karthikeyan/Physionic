import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Cards = () => {
  return (
    <div className='card-wrap'>
      <div className='card-cont'>
          <div className='card-head'>
              <div><PeopleOutlineIcon style={{color:'rgb(138, 175, 255)',fontSize:'36px',marginTop:'8px'}}/></div>
              <h4>Emergency Case</h4>
          </div>
          <div className='card-body'>
              <p>- The best products start with Figma</p>
              <p>- Design with real data</p>
              <p>- Lightning fast prototyping</p>
              <p>- Fastest way to organize</p>
              <p>- Work at the speed of thought</p>
              <h5>Learn More</h5>
          </div>
      </div>
      <div className='card-cont'>
          <div className='card-head'>
              <div><PeopleOutlineIcon style={{color:'rgb(138, 175, 255)',fontSize:'36px',marginTop:'8px'}}/></div>
              <h4>Cancer Case</h4>
          </div>
          <div className='card-body'>
              <p>- The best products start with Figma</p>
              <p>- Design with real data</p>
              <p>- Lightning fast prototyping</p>
              <p>- Fastest way to organize</p>
              <p>- Work at the speed of thought</p>
              <h5>Learn More</h5>
          </div>
      </div>
      <div className='card-cont'>
          <div className='card-head'>
              <div><PeopleOutlineIcon style={{color:'rgb(138, 175, 255)',fontSize:'36px',marginTop:'8px'}}/></div>
              <h4>Health Queries</h4>
          </div>
          <div className='card-body'>
              <p>- The best products start with Figma</p>
              <p>- Design with real data</p>
              <p>- Lightning fast prototyping</p>
              <p>- Fastest way to organize</p>
              <p>- Work at the speed of thought</p>
              <h5>Learn More</h5>
          </div>
      </div>
    </div>
  )
}

export default Cards
