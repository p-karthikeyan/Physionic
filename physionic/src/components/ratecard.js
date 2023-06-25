import React from 'react'
import tamana from '../assets/dp.jpg'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Ratecard = () => {
  return (
    <div className='rate-wrap'>
      <div className='rate-cont'>
        <div className='rating-stars'>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarBorderIcon/>
        </div>
        <p>
            Slate helps you see how many more days
            you need to work to reach your financial goal. 
        </p>
        <div className='dp-cont'>
            <img src={tamana}/>
        </div>
      </div>
      <div className='rate-cont'>
        <div className='rating-stars'>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarBorderIcon/>
        </div>
        <p>
            Slate helps you see how many more days
            you need to work to reach your financial goal. 
        </p>
        <div className='dp-cont'>
            <img src={tamana}/>
        </div>
      </div>
      <div className='rate-cont'>
        <div className='rating-stars'>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarBorderIcon/>
        </div>
        <p>
            Slate helps you see how many more days
            you need to work to reach your financial goal. 
        </p>
        <div className='dp-cont'>
            <img src={tamana}/>
        </div>
      </div>
    </div>
  )
}

export default Ratecard
