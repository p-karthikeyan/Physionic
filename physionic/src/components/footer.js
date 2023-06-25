import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='division'>
        <h3>Get In Touch</h3>
        <p>the quick fox jumps over the lazy dog</p>
        <div>
            <FacebookRoundedIcon style={{color:'rgb(0, 170, 255)'}}/>
            <InstagramIcon style={{color:'rgb(0, 170, 255)'}}/>
            <TwitterIcon style={{color:'rgb(0, 170, 255)'}}/>
        </div>
      </div>
      <div className='division'>
        <h3>Company info</h3>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>
      </div>
      <div className='division'>
        <h3>Features</h3>
        <p>Business Marketing</p>
        <p>User Analytic</p>
        <p>Live Chat</p>
        <p>Unlimited Support</p>
      </div>
      <div className='division'>
        <h3>Resources</h3>
        <p>IOS & Android</p>
        <p>Watch a Demo</p>
        <p>Customers</p>
        <p>API</p>
      </div>
    </div>
  )
}

export default Footer
