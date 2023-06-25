import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Pricecards = () => {
  return (
    <div className='wraper'>
        <div className='price-card-cont'>
            <h2>FREE</h2>
            <p>Organize across all apps by hand</p>
            <div className='price-wrap'>
                <h1 style={{fontSize:'36px'}}>0</h1>
                <div>
                    <p>&#36;</p>
                    <p>Per Month</p>
                </div>
            </div>
            <div className='feature-list'>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'rgb(106, 255, 47)'}}/>
                    <p>Unlimited product updates</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>1GB Cloud Storage</p>
                </div>
                <div>
                    <CheckCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'grey'}}/>
                    <p>Email and community support</p>
                </div>
                <button className='prim-btn' style={{width:'100%'}}>Try for free</button>
            </div>
        </div>
    </div>
  )
}

export default Pricecards
