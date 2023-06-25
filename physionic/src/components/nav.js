import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Nav = () => {
  return (
    <div className='nav-cont'>
        <div className='nav-left'>
        <h2>Physionic</h2>
            <div>
                <p>Home</p>
                <p>Product</p>
                <p>Pricing</p>
                <p>Contact</p>
            </div>
        </div>
        <button><span>Get Quote New</span><ArrowForwardIcon style={{fontSize:'medium',margin:'0px 10px'}}/></button>
    </div>
  )
}

export default Nav
